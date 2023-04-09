import { useState } from 'react'
import MobileHeader from "./header/mobile-header.jsx";
import DesktopHeader from "./header/desktop-header.jsx";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <DesktopHeader />
            <MobileHeader />
        </header>
    )
}
