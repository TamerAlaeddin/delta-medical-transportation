export function Features() {
  const features = [
    {
      title: "Licensed & Insured",
      description: "All our drivers are professionally trained, background-checked, and certified in patient care and safety protocols.",
      color: "green",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Always On Time",
      description: "We track appointments and plan routes carefully to ensure you never miss an important medical visit.",
      color: "blue",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Wheelchair Accessible",
      description: "Wheelchair lifts, stretcher capabilities, and specialized equipment for all mobility levels and medical needs.",
      color: "green",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
    {
      title: "Professional Service",
      description: "Our staff treats every patient with dignity, respect, and the personalized attention they deserve.",
      color: "red",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Easy Booking",
      description: "Simple scheduling process via phone, email, or online booking. Quick response and confirmation.",
      color: "blue",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Affordable Rates",
      description: "Clear pricing with no hidden fees. We provide quotes upfront so you know exactly what to expect.",
      color: "green",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          gradient: 'from-delta-blue to-delta-blue',
          border: 'border-delta-blue/20 hover:border-delta-blue/50',
          text: 'group-hover:text-delta-blue',
          corner: 'from-blue-100',
        };
      case 'red':
        return {
          gradient: 'from-delta-red to-delta-red',
          border: 'border-delta-red/20 hover:border-delta-red/50',
          text: 'group-hover:text-delta-red',
          corner: 'from-red-100',
        };
      default:
        return {
          gradient: 'from-green-600 to-green-700',
          border: 'border-green-200 hover:border-green-400',
          text: 'group-hover:text-green-700',
          corner: 'from-green-100',
        };
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{
      background: "radial-gradient(140% 90% at 80% -20%, #B8F8B8 0%, #89E689 25%, #C9FFD3 55%, #ECFFF2 85%)"
    }}>
      <div
        className="absolute -top-60 -left-80 w-[950px] h-[950px] rounded-full blur-[200px] opacity-60"
        style={{
          background: "radial-gradient(circle at 35% 40%, rgba(0,255,130,0.5), rgba(255,255,255,0))",
        }}
      />
      <div
        className="absolute bottom-[-250px] right-[-300px] w-[1100px] h-[1100px] rounded-full blur-[220px] opacity-40"
        style={{
          background: "radial-gradient(circle at 70% 80%, rgba(0,128,96,0.25), rgba(255,255,255,0))",
        }}
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1.5px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold mb-4">
            Why Choose Delta
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Reliable Medical Transportation in New Jersey
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're committed to providing safe, comfortable, and professional medical transportation 
            services throughout New Jersey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div
                key={index}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 ${colors.border} hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  {feature.icon}
                </div>

                <h3 className={`text-xl font-bold text-gray-900 mb-3 ${colors.text} transition-colors`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.corner} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
