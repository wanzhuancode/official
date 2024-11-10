import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect x="3" y="12" width="6" height="8" rx="1"></rect>
              <rect x="9" y="8" width="6" height="12" rx="1"></rect>
              <rect x="15" y="4" width="6" height="16" rx="1"></rect>
              <path d="M4 20h14"></path>
            </svg>
          }
          name="玩转Code"
        />
      </a>
      <NavMenu>
        <NavMenuItem href="/">首页</NavMenuItem>
        <NavMenuItem href="#cxycsx">程序员陈师兄</NavMenuItem>
        {/* <NavMenuItem href="/">JS逆向实战</NavMenuItem> */}
        <NavMenuItem href="https://space.bilibili.com/409871996" target="_blank">B站</NavMenuItem>
        <NavMenuItem href="#problem">常见问题</NavMenuItem>
        <NavMenuItem href="http://upload.cxycsx.vip/a1cd99e6b709dc95f44abd520ad5d75.jpg" target="_blank">联系我</NavMenuItem>
        <NavMenuItem href="https://www.yuque.com/cxycsx/vkov7g/nxcxu9hec8v8pfwn?singleDoc">IDEA/Pycharm激活码</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
