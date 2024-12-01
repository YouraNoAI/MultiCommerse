const Blank = () => {
    document.title = "Blank"
  return (
    <div className="blankPage">
      <h2>Maaf Halaman tidak di temukan</h2>
      <p>
        Mungkin ada kesalahan sistem, harap{" "}
        <a href="/Konsultasi">Konsultasi ke developer</a>
      </p>
      <span>Terimakasih <br /></span>
      <a href="/" id="back"> Kembali ke beranda</a>
    </div>
  );
};
export default Blank;
