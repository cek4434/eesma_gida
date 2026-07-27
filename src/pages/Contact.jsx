function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">İletişim</span>
          <h1>Bizimle iletişime geçin</h1>
          <p>
            Sipariş, fiyat teklifi veya teknik bilgi için bizi arayabilirsiniz.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container contact-info">
          <div className="contact-card">
            <span>Adres</span>
            <strong>Esma İdeal Gıda</strong>
            <p>
              Kavakpınar Mah. Tandoğan Cd. No:142
              <br />
              34899 Pendik / İstanbul
            </p>
          </div>
          <div className="contact-card">
            <span>Telefon</span>
            <a href="tel:+905332644815">+90 533 264 48 15</a>
          </div>
        </div>

        <div className="container map-frame">
          <iframe
            title="Esma İdeal Gıda konumu"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Kavakp%C4%B1nar+Mah.+Tando%C4%9Fan+Cd.+No:142+Pendik+%C4%B0stanbul&output=embed"
          />
        </div>
      </section>
    </>
  )
}

export default Contact
