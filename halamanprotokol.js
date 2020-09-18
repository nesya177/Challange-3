import React from 'react'
import "./halamanprotokol.css"
class halamanprotokol extends React.Component {
    render() {
        return (
            <div>
                <div className="wadah">
                    <div className="titel">
                        <h1>Halaman Protokol</h1>
                        <div className="line"></div>
                    </div>
                    <div className="inner">
                        <div className="halamanprotokol">
                        <p>Protokol Kesehatan Pencegahan Covid-19:</p>
                        <p>1. Jaga kebersihan tangan</p>
                        <p>2. Jangan Menyentuh Wajah</p>
                        <p>3. Terapkan Etika Batuk Dan Bersin</p>
                        <p>4. Pakai Masker</p>
                        <p>5. Jaga Jarak</p>
                        <p>6. Isolasi Mandiri</p>
                        <p>7. Jaga Kesehatan</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default halamanprotokol;