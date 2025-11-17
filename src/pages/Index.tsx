import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const products = [
    {
      id: 1,
      name: 'Пирог с мясом и овощами',
      description: 'Сочная начинка из говядины, картофеля и моркови в золотистом тесте',
      price: 450,
      image: 'https://cdn.poehali.dev/projects/d687e8c7-1de7-4cef-889e-8ce989742d0f/files/76456c12-2b84-457d-9fd8-b05311454b96.jpg'
    },
    {
      id: 2,
      name: 'Слойка с яблоком',
      description: 'Хрустящие слои нежного теста с ароматной яблочной начинкой и корицей',
      price: 180,
      image: 'https://cdn.poehali.dev/projects/d687e8c7-1de7-4cef-889e-8ce989742d0f/files/9e1a68f2-1f8c-4291-b48f-60231ac93b2b.jpg'
    },
    {
      id: 3,
      name: 'Пирог с ягодами',
      description: 'Домашний пирог с сезонными ягодами и нежной сахарной посыпкой',
      price: 380,
      image: 'https://cdn.poehali.dev/projects/d687e8c7-1de7-4cef-889e-8ce989742d0f/files/0c142020-3914-409f-9e22-3134f2513a02.jpg'
    },
    {
      id: 4,
      name: 'Слойка с творогом',
      description: 'Воздушная слойка с натуральной творожной начинкой',
      price: 160,
      image: 'https://cdn.poehali.dev/projects/d687e8c7-1de7-4cef-889e-8ce989742d0f/files/9e1a68f2-1f8c-4291-b48f-60231ac93b2b.jpg'
    },
    {
      id: 5,
      name: 'Пирог с капустой',
      description: 'Классический пирог с тушёной капустой и луком по бабушкиному рецепту',
      price: 320,
      image: 'https://cdn.poehali.dev/projects/d687e8c7-1de7-4cef-889e-8ce989742d0f/files/76456c12-2b84-457d-9fd8-b05311454b96.jpg'
    },
    {
      id: 6,
      name: 'Слойка с вишней',
      description: 'Слоёное тесто с кисло-сладкой вишнёвой начинкой',
      price: 190,
      image: 'https://cdn.poehali.dev/projects/d687e8c7-1de7-4cef-889e-8ce989742d0f/files/0c142020-3914-409f-9e22-3134f2513a02.jpg'
    }
  ];

  const reviews = [
    { id: 1, name: 'Анна К.', text: 'Лучшие пироги в городе! Всегда свежие и очень вкусные', rating: 5 },
    { id: 2, name: 'Дмитрий М.', text: 'Заказываю регулярно. Доставка быстрая, качество отличное', rating: 5 },
    { id: 3, name: 'Елена С.', text: 'Слойки просто тают во рту! Рекомендую всем', rating: 5 }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥐</span>
            <h1 className="text-xl font-bold">Пироги и слойки в Нижнем</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-sm font-medium hover:text-primary transition-colors">
              Меню
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection('delivery')} className="text-sm font-medium hover:text-primary transition-colors">
              Доставка
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
          <Button size="sm" className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать
          </Button>
        </div>
      </header>

      <section id="hero" className="py-20 px-4 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Домашняя выпечка с душой
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свежие пироги и слойки каждый день. Доставка по Нижнему Новгороду за 60 минут
          </p>
          <Button size="lg" onClick={() => scrollToSection('menu')} className="hover-scale">
            <Icon name="ShoppingBag" size={20} className="mr-2" />
            Посмотреть меню
          </Button>
        </div>
      </section>

      <section id="menu" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наше меню</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-scale">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <Button>
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-accent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8">О нас</h2>
          <div className="space-y-4 text-lg">
            <p>
              Мы — семейная пекарня, которая уже 10 лет радует жителей Нижнего Новгорода домашней выпечкой. 
              Наши пироги и слойки готовятся по традиционным рецептам из натуральных ингредиентов.
            </p>
            <p>
              Каждое утро мы замешиваем тесто, готовим начинки из свежих продуктов и выпекаем для вас 
              ароматные пироги. Никаких полуфабрикатов — только ручная работа и забота о качестве.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <h3 className="font-bold mb-2">10 лет опыта</h3>
                <p className="text-sm text-muted-foreground">Проверенные временем рецепты</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🥖</div>
                <h3 className="font-bold mb-2">100% натурально</h3>
                <p className="text-sm text-muted-foreground">Без консервантов и добавок</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🚚</div>
                <h3 className="font-bold mb-2">Быстрая доставка</h3>
                <p className="text-sm text-muted-foreground">В течение 60 минут</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8">Доставка</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-primary" />
                  Время доставки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Ежедневно с 9:00 до 21:00</li>
                  <li>• Среднее время доставки: 45-60 минут</li>
                  <li>• Заказы принимаются за 2 часа</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Зоны доставки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Автозаводский район — бесплатно</li>
                  <li>• Канавинский район — бесплатно</li>
                  <li>• Остальные районы — 150 ₽</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="CreditCard" size={24} className="text-primary" />
                Оплата
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Принимаем наличные и банковские карты. Минимальная сумма заказа — 300 ₽</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-accent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Телефон</h3>
              <p className="text-lg">+7 (831) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-lg">info@pirogi-nn.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Адрес</h3>
              <p className="text-lg">г. Нижний Новгород<br/>ул. Пекарская, д. 10</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Пироги и слойки в Нижнем. Все права защищены.</p>
          <p className="mt-2">Сделано с ❤️ для любителей домашней выпечки</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
