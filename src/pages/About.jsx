import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Hakkımızda</span>
          <h1>Esma İdeal Gıda</h1>
          <p>
            2013 yılında Abubekir Ekici tarafından kurulan firmamız, un ve un
            ürünleri alanında güvenilir üretim anlayışıyla büyümeye devam ediyor.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container about-story">
          <img src="/images/logo.png" alt="Esma İdeal Gıda logosu" />
          <div className="about-copy">
            <p>
              <strong>Esma İdeal Gıda</strong>, İstanbul Pendik’teki tesisinde
              özel amaçlı unlar, ekmek karışımları ve süsleme ürünleri sunar.
              Markamızın özünde doğal hammaddeler, tutarlı kalite ve fırın
              ustalarının ihtiyacına uygun formüller vardır.
            </p>
            <p>
              İDEAL markasıyla ürettiğimiz ürünler; tam buğday, çavdar, tahıl ve
              köy tipi karışımlardan kavrulmuş malt ununa kadar geniş bir yelpaze
              kapsar. Amacımız, her torbada aynı güvenilir sonucu vermektir.
            </p>
            <p>
              Adresimiz:{' '}
              <strong>
                Kavakpınar Mah. Tandoğan Cd. No:142, 34899 Pendik / İstanbul
              </strong>
            </p>
            <div>
              <Link className="btn btn-outline" to="/urunler">
                Ürün kataloğu
              </Link>
            </div>
          </div>
        </div>

        <div className="container timeline">
          <div className="timeline-item">
            <strong>2013</strong>
            <p>
              Abubekir Ekici tarafından Esma İdeal Gıda kuruldu. Un ve un
              ürünleri üretiminde ilk adımlar atıldı.
            </p>
          </div>
          <div className="timeline-item">
            <strong>Bugün</strong>
            <p>
              Özel amaçlı unlar, ekmek karışımları ve süsleme ürünleriyle
              fırınlara ve gıda işletmelerine hizmet veriyoruz.
            </p>
          </div>
          <div className="timeline-item">
            <strong>Hedef</strong>
            <p>
              Yerli üretim gücümüzü koruyarak kaliteli un çözümlerini daha fazla
              işletmeye ulaştırmak.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
