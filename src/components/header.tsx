import Image from 'next/image';
import Logo from '@/assets/logo.svg';

function Header() {
	return (
		<header>
			<Image src={Logo} alt='logo' height={24} />
		</header>
	);
}

export default Header;
