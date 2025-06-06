
const TestimonialsSection = () => {
  const testimonials = [
    {
      business: "شركة تقنية معلومات",
      comment: "النظام ساعدنا ننظم فواتيرنا بشكل احترافي ووفر علينا وقت كبير",
      rating: 5
    },
    {
      business: "شركة تسويق",
      comment: "العملاء انبهروا بشكل الفواتير الجديد وصار الدفع أسرع",
      rating: 5
    },
    {
      business: "معرض أبواب ونوافذ",
      comment: "الفاتورة تطلع بشعار المعرض وتبدو مثل الشركات الكبيرة",
      rating: 5
    },
    {
      business: "شركة مقاولات",
      comment: "كنت أتعب مع الفواتير اليدوية، الآن كل شيء جاهز خلال دقائق",
      rating: 5
    },
    {
      business: "فني صيانة",
      comment: "العملاء صاروا يدفعون أسرع لأن الفاتورة مرتبة وواضحة",
      rating: 5
    },
    {
      business: "مصمم حر",
      comment: "أشتغل من الجوال، والفاتورة تطلع بهويتي الكاملة",
      rating: 5
    },
    {
      business: "محل إلكترونيات",
      comment: "النظام سهل جداً، حتى الموظفين تعلموه بسرعة",
      rating: 5
    },
    {
      business: "مكتب استشارات",
      comment: "التقارير المالية ساعدتني أفهم وضع شركتي بوضوح",
      rating: 5
    },
    {
      business: "ورشة سيارات",
      comment: "الدعم الفني ممتاز، دايماً متواجدين لأي استفسار",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-modern-fade-in">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
            آراء <span className="text-slate-600">عملائنا</span>
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            ماذا يقول أصحاب الأعمال عن تجربتهم
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="clean-card p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl animate-slide-up-bounce group"
              style={{animationDelay: `${0.1 + index * 0.1}s`}}
            >
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg transition-transform duration-300 group-hover:scale-110" style={{animationDelay: `${i * 0.1}s`}}>★</span>
                  ))}
                </div>
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed font-normal text-lg group-hover:text-slate-800 transition-colors duration-300">
                "{testimonial.comment}"
              </p>
              
              <div className="border-t border-slate-200 pt-6">
                <div className="font-medium text-slate-800 text-lg group-hover:text-blue-600 transition-colors duration-300">{testimonial.business}</div>
                <div className="text-slate-500 text-sm mt-1">عميل راضٍ</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
