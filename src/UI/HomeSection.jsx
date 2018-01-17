import React from 'react';

export default function HomeSection(){

    return (
        <div>
            <div className="container-fluid card mycard" id="Image_card">
                <div className="row car-header ">
                    <div className="col-sm-12 col-md-4 my_img_div">
                        <img src="//hkalex.github.io/img/photo.png" className="my-photo" alt=""/>
      
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div>{document.getElementById('myname').value}</div>
                        <div>Junior developer</div>
                        <div>
                            <a className="my-links" href="//facebook.com" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a className="my-links" href="//twitter.com" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a className="my-links" href="//instagram.com" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a className="my-links" href="//qq.com" target="_blank"><i className="fa fa-qq" aria-hidden="true"></i>
                            </a>
        
                        </div>

                    </div>
                </div>

                <div className="row card-body">
                    
                    <div className="col-sm-12 col-md-6 card-body-detail">
                        <div>About Me</div>
                        <div>Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.</div>
                        
                    </div>
                    


                    <div className="col-sm-12 col-md-6 card-body-detail">
                        <div>
                            Age 29 <br/>
                            Residence Australia<br/>
                            Address Campsie<br/>
                            e-mail hkalex@gmail.com<br/>
                            Phone 0401613888<br/>
                            Freelance Available<br/>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}



