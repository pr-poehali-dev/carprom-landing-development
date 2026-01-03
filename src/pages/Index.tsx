import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
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

  const products = [
    {
      name: "Жабо верхнее LADA Vesta",
      description: "Защита от влаги и грязи под капотом",
      minOrder: "от 30 шт",
    },
    {
      name: "Жабо нижнее (под фары) LADA Vesta",
      description: "Дополнительная защита фар и моторного отсека",
      minOrder: "от 30 шт",
    },
    {
      name: "Комплект жабо LADA Vesta",
      description: "Верхнее + нижнее (выгодное предложение)",
      minOrder: "от 30 комплектов",
    },
    {
      name: "Жабо под фары LADA Granta",
      description: "Качественная защита для популярной модели",
      minOrder: "от 30 шт",
    },
  ];

  const advantages = [
    {
      icon: "Factory",
      title: "Собственное производство",
      description: "Завод в Тольятти — контроль качества на каждом этапе",
    },
    {
      icon: "Shield",
      title: "Мы производитель",
      description: "Работаете напрямую без посредников — лучшие цены",
    },
    {
      icon: "Package",
      title: "Стабильное наличие",
      description: "Продукция всегда в наличии — никаких задержек",
    },
    {
      icon: "Handshake",
      title: "Гибкие условия",
      description: "Индивидуальный подход к каждому оптовому клиенту",
    },
    {
      icon: "Clock",
      title: "Быстрый ответ",
      description: "Обрабатываем заявки в течение 15 минут",
    },
    {
      icon: "Truck",
      title: "Доставка по РФ",
      description: "Отгружаем заказы во все регионы России",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Оставьте заявку",
      description: "Заполните форму или позвоните нам",
    },
    {
      number: "02",
      title: "Получите прайс",
      description: "Вышлем актуальные цены и условия",
    },
    {
      number: "03",
      title: "Образцы и согласование",
      description: "Предоставим образцы для оценки качества",
    },
    {
      number: "04",
      title: "Первый заказ",
      description: "Оформляем и отгружаем партию от 30 шт",
    },
  ];

  const clients = [
    {
      icon: "Store",
      title: "Интернет-магазины",
      description: "Автозапчастей и аксессуаров",
    },
    {
      icon: "Building2",
      title: "Офлайн-магазины",
      description: "Розничные точки по России",
    },
    {
      icon: "ShoppingCart",
      title: "Продавцы на маркетплейсах",
      description: "Wildberries, Ozon, Яндекс.Маркет",
    },
    {
      icon: "Package2",
      title: "Оптовые компании",
      description: "Дистрибьюторы автозапчастей",
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Car" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-primary">CarProm</span>
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Производитель автоаксессуаров
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Жабо для LADA
                <br />
                <span className="text-accent">от производителя</span>
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Собственное производство в Тольятти. Опт от 30 штук.
                Стабильное наличие и доставка по всей России.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                  <Icon name="MapPin" className="text-accent" size={20} />
                  <span className="font-semibold">Тольятти, Россия</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                  <Icon name="Package" className="text-accent" size={20} />
                  <span className="font-semibold">Опт от 30 шт</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  Получить прайс
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/11c663b1-19df-4212-b117-1a593b411e4e/files/a393def1-93ee-4982-9e13-eddef4e18af9.jpg"
                alt="LADA автомобиль"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Наша продукция
            </h2>
            <p className="text-xl text-secondary">
              Качественные автоаксессуары для LADA
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-secondary mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">
                    {product.minOrder}
                  </span>
                  <Button variant="outline" size="sm">
                    Заказать
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <img
              src="https://cdn.poehali.dev/projects/11c663b1-19df-4212-b117-1a593b411e4e/files/07db8066-a261-4872-a7b6-d434cb4d08b3.jpg"
              alt="Жабо CarProm"
              className="max-w-2xl mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Почему выбирают CarProm
            </h2>
            <p className="text-xl text-secondary">
              Надёжный партнёр для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={advantage.icon} className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {advantage.title}
                </h3>
                <p className="text-secondary text-lg">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Для кого мы работаем
            </h2>
            <p className="text-xl text-secondary">
              Наши партнёры по всей России
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name={client.icon} className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {client.title}
                </h3>
                <p className="text-secondary">{client.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как начать сотрудничество</h2>
            <p className="text-xl text-gray-300">
              Простой процесс от заявки до первого заказа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-lg">{step.description}</p>
                {index < steps.length - 1 && (
                  <Icon
                    name="ArrowRight"
                    className="hidden lg:block absolute -right-4 top-8 text-accent/30"
                    size={32}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                О нашем производстве
              </h2>
              <p className="text-xl text-secondary mb-6 leading-relaxed">
                CarProm — производственная компания с собственным заводом в
                Тольятти. Мы специализируемся на выпуске качественных
                автоаксессуаров для автомобилей LADA.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1" size={24} />
                  <p className="text-lg">
                    <strong>Современное оборудование</strong> — полный цикл
                    производства на заводе
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1" size={24} />
                  <p className="text-lg">
                    <strong>Контроль качества</strong> — проверка каждой
                    детали перед отгрузкой
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1" size={24} />
                  <p className="text-lg">
                    <strong>Опыт работы</strong> — знаем все особенности LADA
                  </p>
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Узнать больше о производстве
              </Button>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/11c663b1-19df-4212-b117-1a593b411e4e/files/54d3613d-b578-4476-88d3-b1f80b68cd53.jpg"
                alt="Производство CarProm"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
