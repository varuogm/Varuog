const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Varuog.
      <a href="https://images.fineartamerica.com/images-medium-large-5/van-gogh-motivational-quotes-wheat-field-with-cypresses-jose-a-gonzalez-jr.jpg">Varo</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
