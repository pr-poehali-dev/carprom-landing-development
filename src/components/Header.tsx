import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
