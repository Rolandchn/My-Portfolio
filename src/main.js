import '../style/modern-normalize.css';
import '../style/global.css';
import '../style/component/header.css';
import '../style/component/hero.css';
import '../style/component/about.css';
import '../style/component/feature.css';
import '../style/component/project.css';
import '../style/component/contact.css';
import '../style/component/footer.css';
import '../style/component/mobile-nav.css';
import '../style/unit.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';

mobileNav();
darkMode();
lazyLoading();
