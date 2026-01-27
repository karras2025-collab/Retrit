import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { DATES } from '../constants';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    price: number;
}

// Flatten dates for dropdown
const getAllDates = () => {
    const allDates: string[] = [];
    DATES.forEach(item => {
        item.dates.forEach(date => {
            allDates.push(`${date} ${item.month}`);
        });
    });
    return allDates;
};

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, price }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        selectedDate: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const availableDates = getAllDates();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError(null);
    };

    const formatPhone = (value: string) => {
        // Remove all non-digits except +
        let cleaned = value.replace(/[^\d+]/g, '');

        // Ensure starts with +7
        if (!cleaned.startsWith('+')) {
            if (cleaned.startsWith('8')) {
                cleaned = '+7' + cleaned.slice(1);
            } else if (cleaned.startsWith('7')) {
                cleaned = '+' + cleaned;
            } else if (cleaned.length > 0) {
                cleaned = '+7' + cleaned;
            }
        }

        // Format as +7 (XXX) XXX-XX-XX
        const match = cleaned.match(/^\+7(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
        if (match) {
            let formatted = '+7';
            if (match[1]) formatted += ` (${match[1]}`;
            if (match[1]?.length === 3) formatted += ')';
            if (match[2]) formatted += ` ${match[2]}`;
            if (match[3]) formatted += `-${match[3]}`;
            if (match[4]) formatted += `-${match[4]}`;
            return formatted;
        }
        return cleaned;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value);
        setFormData(prev => ({ ...prev, phone: formatted }));
        setError(null);
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            setError('Введите ваше имя');
            return false;
        }
        if (!formData.phone || formData.phone.length < 18) {
            setError('Введите корректный номер телефона');
            return false;
        }
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError('Введите корректный email');
            return false;
        }
        if (!formData.selectedDate) {
            setError('Выберите дату заезда');
            return false;
        }
        if (!agreedToTerms) {
            setError('Необходимо согласие на обработку персональных данных');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/.netlify/functions/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    selectedDate: formData.selectedDate,
                    amount: price,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Ошибка создания платежа');
            }

            // Redirect to YuKassa payment page
            if (data.confirmationUrl) {
                window.location.href = data.confirmationUrl;
            } else {
                throw new Error('Не получена ссылка на оплату');
            }
        } catch (err) {
            console.error('Payment error:', err);
            setError(err instanceof Error ? err.message : 'Произошла ошибка. Попробуйте позже.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                    <h2 className="text-xl font-serif text-stone-900">Бронирование</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                        aria-label="Закрыть"
                    >
                        <X size={20} className="text-stone-500" />
                    </button>
                </div>

                {/* Content */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Price info */}
                    <div className="bg-primary-50 rounded-xl p-4 text-center">
                        <p className="text-sm text-primary-700 mb-1">Стоимость ретрита</p>
                        <p className="text-2xl font-bold text-primary-800">{price.toLocaleString('ru-RU')} ₽</p>
                    </div>

                    {/* Date selection */}
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                            <Calendar size={16} className="inline mr-2" />
                            Дата заезда
                        </label>
                        <select
                            name="selectedDate"
                            value={formData.selectedDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-stone-900"
                            required
                        >
                            <option value="">Выберите дату</option>
                            {availableDates.map((date, idx) => (
                                <option key={idx} value={date}>{date}</option>
                            ))}
                        </select>
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                            <User size={16} className="inline mr-2" />
                            Ваше имя
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Иван Иванов"
                            className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-stone-900"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                            <Phone size={16} className="inline mr-2" />
                            Телефон
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="+7 (999) 123-45-67"
                            className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-stone-900"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                            <Mail size={16} className="inline mr-2" />
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="email@example.com"
                            className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-stone-900"
                            required
                        />
                    </div>

                    {/* Terms agreement */}
                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="mt-1 w-4 h-4 text-primary-600 border-stone-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="terms" className="text-sm text-stone-600">
                            Я согласен на{' '}
                            <a href="/consent.html" target="_blank" className="text-primary-600 hover:underline">
                                обработку персональных данных
                            </a>
                        </label>
                    </div>

                    {/* Error message */}
                    {error && (
                        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm">
                            {error}
                        </div>
                    )}

                    {/* Submit button */}
                    <Button
                        type="submit"
                        fullWidth
                        size="lg"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 size={20} className="animate-spin mr-2" />
                                Обработка...
                            </>
                        ) : (
                            'Перейти к оплате'
                        )}
                    </Button>

                    <p className="text-xs text-stone-400 text-center">
                        После оплаты вы получите подтверждение на email
                    </p>
                </form>
            </div>
        </div>
    );
};
