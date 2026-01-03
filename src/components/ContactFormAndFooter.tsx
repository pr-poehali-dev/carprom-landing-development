import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactFormAndFooter = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 15 минут",
    });
    setFormData({ name: "", company: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Получить коммерческое предложение
              </h2>
              <p className="text-xl text-secondary">
                Заполните форму — ответим в течение 15 минут
              </p>
            </div>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Название компании *
                  </label>
                  <Input
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="ООО «Автозапчасти»"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Телефон *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+7 (900) 000-00-00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Сообщение (необязательно)
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Укажите интересующую продукцию и объёмы закупки"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-lg"
                >
                  Отправить заявку
                </Button>
                <p className="text-sm text-secondary text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой
                  конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Car" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">CarProm</span>
              </div>
              <p className="text-gray-300">
                Производство автоаксессуаров для LADA. Опт от производителя.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  Тольятти, Россия
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (800) 000-00-00
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@carprom.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <p className="text-gray-300">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-gray-300">Сб-Вс: выходной</p>
              <p className="text-accent font-semibold mt-4">
                Ответ на заявки в течение 15 минут
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CarProm. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFormAndFooter;
