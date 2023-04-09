import { useState } from 'react'
import MobileHeader from "./header/mobile-header.jsx";
import DesktopHeader from "./header/desktop-header.jsx";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    function handleMobileMenuOpen(value) {
        setMobileMenuOpen(value)
    }


    return (
        <header className="bg-white">
            <DesktopHeader handleMobileMenuOpen={handleMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
            <MobileHeader mobileMenuOpen={mobileMenuOpen} handleMobileMenuOpen={handleMobileMenuOpen} />
        </header>
    )
}
