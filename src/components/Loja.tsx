import { Scale, ShoppingCart, Star, TruckIcon, Shield, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Loja = () => {
  const handleOpenStore = () => {
    window.open("https://preview--barba-growth-journey-76.lovable.app/", "_blank");
  };

  const featuredBooks = [
    {
      title: "Manual de Direito Civil",
      author: "Dr. Carlos Santos",
      price: "R$ 89,90",
      originalPrice: "R$ 129,90",
      image: "/lovable-uploads/30a8cfcd-a32c-4e34-8502-f624d87bc104.png",
      rating: 4.8,
      reviews: 245,
      category: "Direito Civil"
    },
    {
      title: "Código Penal Comentado",
      author: "Dra. Ana Maria",
      price: "R$ 119,90",
      originalPrice: "R$ 159,90",
      image: "/lovable-uploads/30a8cfcd-a32c-4e34-8502-f624d87bc104.png",
      rating: 4.9,
      reviews: 189,
      category: "Direito Penal"
    },
    {
      title: "Constituição Federal Anotada",
      author: "Prof. João Silva",
      price: "R$ 79,90",
      originalPrice: "R$ 109,90",
      image: "/lovable-uploads/30a8cfcd-a32c-4e34-8502-f624d87bc104.png",
      rating: 4.7,
      reviews: 312,
      category: "Direito Constitucional"
    }
  ];

  const benefits = [
    {
      icon: TruckIcon,
      title: "Frete Grátis",
      description: "Para compras acima de R$ 99"
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Seus dados protegidos"
    },
    {
      icon: CreditCard,
      title: "Parcelamento",
      description: "Em até 12x sem juros"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Scale className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Mundo do Direito</h1>
        </div>
        <p className="text-xl text-muted-foreground">Livraria Jurídica Especializada</p>
        <p className="text-sm text-muted-foreground mt-2">
          Os melhores livros jurídicos para sua carreira profissional
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6">
              <benefit.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Books */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Livros em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBooks.map((book, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm border-border/50">
              <div className="aspect-[3/4] bg-secondary/20 relative overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                  {Math.round(((parseFloat(book.originalPrice.replace('R$ ', '').replace(',', '.')) - parseFloat(book.price.replace('R$ ', '').replace(',', '.'))) / parseFloat(book.originalPrice.replace('R$ ', '').replace(',', '.'))) * 100)}% OFF
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg leading-tight text-foreground">{book.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{book.author}</CardDescription>
                <Badge variant="outline" className="w-fit text-xs">{book.category}</Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-foreground">{book.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({book.reviews} avaliações)</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-primary">{book.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{book.originalPrice}</span>
                </div>
                <Button className="w-full" onClick={handleOpenStore}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Comprar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Categorias Populares
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Direito Civil",
            "Direito Penal",
            "Direito Trabalhista",
            "Direito Constitucional",
            "Direito Administrativo",
            "Direito Tributário",
            "Direito Processual",
            "Concursos Públicos"
          ].map((category, index) => (
            <Button 
              key={index} 
              variant="outline" 
              className="h-20 flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:bg-primary/10"
              onClick={handleOpenStore}
            >
              <Scale className="h-6 w-6 mb-2" />
              <span className="text-xs text-center">{category}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardContent className="pt-8 pb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Visite Nossa Loja Completa
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore nosso catálogo completo com mais de 500 títulos jurídicos. 
            Encontre os melhores livros para sua área de especialização.
          </p>
          <Button size="lg" onClick={handleOpenStore} className="text-lg px-8">
            <ShoppingCart className="h-5 w-5 mr-3" />
            Acessar Loja Completa
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};