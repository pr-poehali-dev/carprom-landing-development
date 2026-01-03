import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
