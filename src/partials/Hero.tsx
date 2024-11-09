import {
  // GradientText,
  HeroAvatar,
  // HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          {/* Hi there, I'm <GradientText>Ixartz</GradientText> 👋 */}
          无论年纪多大，你都可以有新的日标或新的梦想
          <p>
          No matter how old you are,you can have new goals or new dreams.
          </p>
        </>
      }
      description={
        <>
          <div className='text-customGrayText flex flex-col gap-3'> 

            <h1 className='rounded-md px-2 py-1 text-lg font-semibold bg-sky-400 text-sky-900' style={{ width: 90 }}>课程介绍</h1>

            <p className=''>
              2024JS逆向零基础实战课程, 课程包括视频 + 文档 + 课件 + 代码 + 逆向手册 + 答疑 (购买联系程序员陈师兄 微信：wanzhuancode)</p>
            <p className=''>1.视频更新到2025年9月8号,  一年之内更新的视频都可以观看</p>
            <p >2.视频加密 百度网盘发货 一机一码</p>
            <p >3.JS逆向实战更新视频已经超过200+</p>
            <p >4.购买JS逆向实战课程,配套价值249元（一年有效期)JS逆向实战手册, 目前已更新超过2.5W字, 持续更新中...</p>
            <p >5.双十一限时特惠（赠送价值199Python爬虫数据采集VIP课程）这套课程已经上架B站</p>
            <h1 className='rounded-md px-2 py-1 text-lg font-semibold bg-sky-400 text-sky-900' style={{ width: 90 }}>适合人群</h1>
            <p >1.零基础小白，想学JS逆向</p>
            <p >2.对JS逆向有初步了解，想进一步学习</p>
            <p >3.想恐固提高自己的逆向水平</p>
            <p >4.做网络爬虫，数据采集，想学习逆向，这套课程都适合</p>
            <h1 className='rounded-md px-2 py-1 text-lg font-semibold bg-lime-400 text-lime-900' style={{ width: 90 }}>课程售价</h1>
            <p >¥1299元</p>
            <p >双十一优惠价899（截至日期: 2024.11.11 23:59:59）</p>

        
            <h1 className='rounded-md px-2 py-1 text-lg font-semibold bg-fuchsia-400 text-fuchsia-900' style={{ width: 90 }}>授课风格</h1>
            <p >1.案例驱动实战，课程风格通俗易懂，简洁无任何废话</p>
            <p >2.注重方法和思路，少走弯路</p>

            <h1 className='rounded-md px-2 py-1 text-lg font-semibold bg-rose-400 text-rose-900' style={{ width: 90 }}>编程语言</h1>
            <p >Python以及JS为主要语言，Pycharm开发工具</p>

            
          </div>



        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
  
);

export { Hero };
