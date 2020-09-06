import React, { Component } from 'react';

class Shop extends Component {

    render() {
        let renderDisplay;
     
            renderDisplay = <div>
           <div className="row gallery-showcase">
                  <div className="GalleryBoxSize col span-1-of-3 clearfix">
                      <figure className="gallery-photo">
                          <img src="resources/Photos/Header/1.jpeg" alt="Fashion" onClick={this.props.fashionClick}/>
                      </figure>
                      <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                      <h3>Balaji Blue Tanjore</h3>
                  </div>
                  <div className="GalleryBoxSize col span-1-of-3 clearfix">
                      <figure className="gallery-photo">
                          <img src="resources/Photos/Header/2.jpeg" alt="Events" onClick={this.props.eventClick}/>
                      </figure>
                      <div className="btn-full" onClick={this.props.eventClick}>From ₹6,500.00</div>
                      <h3>Balaji Blue Tanjore</h3>
                  </div>
                  <div className="GalleryBoxSize col span-1-of-3 clearfix">
                      <figure className="gallery-photo">
                          <img src="resources/Photos/Header/3.jpeg" alt="Weddings" onClick={this.props.weddingClick}/>
                      </figure>
                      <div className="btn-full" onClick={this.props.weddingClick}>From ₹6,500.00</div>
                      <h3>Balaji Blue Tanjore</h3>
                  </div>
            </div>
            <div className="row gallery-showcase">
                  <div className="GalleryBoxSize span-1-of-3 clearfix">
                      <figure className="gallery-photo">
                          <img src="resources/Photos/Header/4.jpeg" alt="Pre(Post)Wedding" onClick={this.props.prePostClick}/>
                      </figure>
                      <div className="btn-full" onClick={this.props.prePostClick}>From ₹6,500.00</div>
                      <h3>Balaji Blue Tanjore</h3>
                  </div>
            </div>
          </div>
        
    

      return (
        <section id="gallery" className="section-gallery">
        <div className="row">
              <h2>3D Embossed…</h2>
        </div>
        <div>{renderDisplay}</div>
        </section>
      );
    }
  }
  
  export default Shop;
  