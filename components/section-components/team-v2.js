import React, { Component } from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';

class TeamV2 extends Component {

    render() {

        let publicUrl = '/'
        let imagealt = 'image'

    return <div className="ltn__team-area pt-110--- pb-90">
				<div className="container">
				<div className="row justify-content-center go-top">
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/4.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link href="/team-details">Rosalina D. William</Link></h4>
						<h6 className="ltn__secondary-color">Real Estate Broker</h6>
						<div className="ltn__social-media">
							<ul>
							<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#"><i className="fab fa-twitter" /></a></li>
							<li><a href="#"><i className="fab fa-linkedin" /></a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/2.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link href="/team-details">Kelian Anderson</Link></h4>
						<h6 className="ltn__secondary-color">Selling Agents</h6>
						<div className="ltn__social-media">
							<ul>
							<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#"><i className="fab fa-twitter" /></a></li>
							<li><a href="#"><i className="fab fa-linkedin" /></a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/3.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link href="/team-details">Miranda H. Halim</Link></h4>
						<h6 className="ltn__secondary-color">Property Seller</h6>
						<div className="ltn__social-media">
							<ul>
							<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#"><i className="fab fa-twitter" /></a></li>
							<li><a href="#"><i className="fab fa-linkedin" /></a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/1.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link href="/team-details">Damble D. Browni.</Link></h4>
						<h6 className="ltn__secondary-color">Property Seller</h6>
						<div className="ltn__social-media">
							<ul>
							<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#"><i className="fab fa-twitter" /></a></li>
							<li><a href="#"><i className="fab fa-linkedin" /></a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/5.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link href="/team-details">Aiden Benjamin</Link></h4>
						<h6 className="ltn__secondary-color">Real Estate Broker</h6>
						<div className="ltn__social-media">
							<ul>
							<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#"><i className="fab fa-twitter" /></a></li>
							<li><a href="#"><i className="fab fa-linkedin" /></a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/6.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link href="/team-details">James Carter</Link></h4>
						<h6 className="ltn__secondary-color">Selling Agents</h6>
						<div className="ltn__social-media">
							<ul>
							<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#"><i className="fab fa-twitter" /></a></li>
							<li><a href="#"><i className="fab fa-linkedin" /></a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default TeamV2