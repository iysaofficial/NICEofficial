import "../assets/css/styles.css"

function Navigation() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">
					<img src="assets/logo/NICE.png" alt="#" className="img-fluid"/>
                    {/* // style="width: 150px; */}
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
					<span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbars-host">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item "><a class="nav-link" href="/">Beranda</a></li>
						<li class="nav-item"><a class="nav-link" href="#about">Tentang</a></li>
						{/* <li class="nav-item dropdown ">
							<a class="nav-link">
								Kurasi
							</a>
							<div class="dropdown-menu" aria-labelledby="dropdown-a">
								<a class="dropdown-item" href="https://drive.google.com/drive/folders/1ZUKHCCgbXoPUXEMEuR9nz2lkr_B1q7RH?usp=sharing"
								target="_blank">
								Kurasi 2023
								</a>
							</div>
						</li> */}
						<li class="nav-item"><a class="nav-link" href="https://drive.google.com/file/d/1Hdh2_LSGpUt8rqywdclM3OAeoBP1aUGL/view?usp=sharing"target="_blank" >Buku Panduan</a></li>
						
						<li class="nav-item"><a class="nav-link" href="/contact">Kontak</a></li>
						<li class="nav-item"><a class="nav-link" href="/faq">FAQ</a></li>
					</ul>
					 {/* <a class="btn btn-outline-warning " href="https://docs.google.com/forms/d/e/1FAIpQLSfkCq7u5n6claDsm20GSGqoUYBx9dY5rrA6ZQjjqNrNoUB_uw/viewform?usp=share_link">Registration</a> */}
				</div>
			</div>
		</nav>
    </>
    )
}

export default Navigation;