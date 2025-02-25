import React, { useEffect } from 'react';
import { Plane as Plant, Phone, Mail, Clock, MapPin, Flower2, Trees as Tree, Sprout } from 'lucide-react';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = '972512345678';
    const message = 'היי, אשמח לשמוע פרטים נוספים על המשתלה';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Plant className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">גן לגנן</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-green-600">אודות</a>
            <a href="#categories" className="text-gray-600 hover:text-green-600">קטגוריות</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600">צור קשר</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-on-scroll from-right">
              המקום שלך לצמחים יפים ובריאים
            </h2>
            <p className="text-xl text-white mb-8 animate-on-scroll from-right" style={{ transitionDelay: '200ms' }}>
              מגוון רחב של צמחי בית וגן, עצים, שיחים ועוד. ייעוץ מקצועי ושירות אישי.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors animate-on-scroll from-right"
              style={{ transitionDelay: '400ms' }}
            >
              בקרו אותנו במשתלה
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-on-scroll">קצת עלינו</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              גן לגנן היא משתלה משפחתית עם ניסיון רב שנים בגידול ושיווק צמחים. 
              אנו מאמינים במתן שירות אישי ומקצועי לכל לקוח, ומציעים מגוון רחב של צמחים איכותיים לכל מטרה. 
              אצלנו תמצאו את כל מה שצריך כדי להקים ולטפח גינה יפה ופורחת.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center animate-on-scroll">קטגוריות צמחים עיקריות</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll scale-up" style={{ transitionDelay: '200ms' }}>
              <Plant className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">צמחי בית</h3>
              <p className="text-gray-600 text-center">מגוון צמחים מושלמים לעיצוב הבית</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll scale-up" style={{ transitionDelay: '400ms' }}>
              <Tree className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">עצים ושיחים</h3>
              <p className="text-gray-600 text-center">עצי נוי, פרי ושיחים מעוצבים</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll scale-up" style={{ transitionDelay: '600ms' }}>
              <Flower2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">צמחי גינה</h3>
              <p className="text-gray-600 text-center">פרחים עונתיים וצמחי גינה מרהיבים</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-on-scroll">בואו לבקר אותנו במשתלה!</h2>
          <p className="text-xl text-white mb-8 animate-on-scroll" style={{ transitionDelay: '200ms' }}>מחכים לכם עם מגוון רחב של צמחים וייעוץ מקצועי</p>
          <a 
            href="#contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors animate-on-scroll"
            style={{ transitionDelay: '400ms' }}
          >
            צרו קשר
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center animate-on-scroll">צרו קשר</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4 animate-on-scroll from-left" style={{ transitionDelay: '200ms' }}>
                <MapPin className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">כתובת</h3>
                  <p className="text-gray-600">רחוב הגינה 123, תל אביב</p>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-on-scroll from-left" style={{ transitionDelay: '400ms' }}>
                <Phone className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">טלפון</h3>
                  <p className="text-gray-600">03-1234567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-on-scroll from-left" style={{ transitionDelay: '600ms' }}>
                <Mail className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">דוא״ל</h3>
                  <p className="text-gray-600">info@ganlaganan.co.il</p>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-on-scroll from-left" style={{ transitionDelay: '800ms' }}>
                <Clock className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">שעות פתיחה</h3>
                  <p className="text-gray-600">א'-ה': 8:00-19:00</p>
                  <p className="text-gray-600">ו': 8:00-14:00</p>
                </div>
              </div>
            </div>
            
            <div className="text-center animate-on-scroll scale-up">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                דברו איתנו בוואטסאפ
              </button>
              <p className="text-gray-600 mt-4">אנחנו כאן לכל שאלה!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sprout className="h-6 w-6" />
            <span className="text-xl font-bold">גן לגנן</span>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} גן לגנן. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;