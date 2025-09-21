// import type { MarkdownInstance } from 'astro';
// import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  // BlogGallery,
  // GradientText,
  Section,
} from 'astro-boilerplate-components';

// type IRecentPostsProps = {
//   postList: MarkdownInstance<IFrontmatter>[];
// };

const RecentPosts = () => (
  <Section
  // title={
  //   <div className="bg-gradient-to-br from-sky-500 to-sky-400 bg-clip-text text-transparent" id="problem">
  //       常见问题
  //   </div>
  // }
  >
    <div
      className="mb-6 bg-gradient-to-br from-sky-500 to-sky-400 bg-clip-text text-2xl font-bold text-transparent"
      id="cxycsx"
    >
      程序员陈师兄
    </div>

    <div className="text-customGrayText flex flex-col gap-3">
      <p
        className="bg-gradient-to-br from-lime-500 to-lime-400 bg-clip-text text-lg font-bold text-transparent"
        style={{ marginBottom: 20 }}
      >
        {/*程序员陈师兄， B站人气UP主，课程风格通俗易懂， 简洁无任何废话。*/}
        {/*熟悉Java/Python/JS/Go等多种语言。 因为工作需要, 最早接触JS逆向在2020年,*/}
        {/*并在2021年在B站发布了第一套JS逆向实战课程,*/}
        {/*收获了大量好评，很多人都是通过这套课程学习的JS逆向。*/}
        {/*因为是在工作中总结提炼出来的课程, 所以课程总体风格都是偏向实战。总之，*/}
        {/*如果你想学习JS逆向, 这门课程将会是你的不二之选。*/}

        <p>👋 程序员陈师兄 B站人气UP主，授课通俗易懂， 简洁无废话</p>

        <p>🚀 曾在某头部公司担任高级后端开发工程师</p>

        <p>💻 熟悉 Java / Python / JavaScript / Go 等多种语言，长期专注于逆向、爬虫与后端开发实战</p>

        <p>🔥 2021年在B站发布了第一套 JS逆向零基础实战课程，风格 通俗易懂、纯干货无废话，帮助无数学员从零入门并成功应用到实际工作
</p>
        <p>课程特点</p>

          <p>✅ 通俗易懂 —— 摒弃枯燥理论，直击核心知识点</p>

          <p>✅ 纯干货无废话 —— 学员普遍反馈“听一次就懂”</p>

          <p>✅ 真实案例驱动 —— 来自真实项目的实战总结</p>

          <p>这门课程已经成为 无数人学习JS逆向的第一选择。 如果你也想掌握这项核心技能，这门课就是你的 最佳起点</p>

        <p>📩 联系方式</p>
            <p>微信：wanzhuancode</p>
            <p>QQ：3041439327</p>
      </p>
    </div>

    <div
      className="mb-6 bg-gradient-to-br from-sky-500 to-sky-400 bg-clip-text text-2xl font-bold text-transparent"
      id="problem"
    >
      课程目录
    </div>

    <div className="text-customGrayText flex flex-row flex-wrap gap-6">
      <img
        src="http://upload.cxycsx.vip/%E7%AE%80%E7%BA%A6%E6%89%8B%E7%BB%98%E9%A3%8E%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E6%B8%85%E5%8D%95%E6%94%BB%E7%95%A5%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-11+02_23_40.png"
        alt=""
        width="311"
        height="415"
      />
      <img
        src="http://upload.cxycsx.vip/%E7%AE%80%E7%BA%A6%E6%89%8B%E7%BB%98%E9%A3%8E%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E6%B8%85%E5%8D%95%E6%94%BB%E7%95%A5%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-11+02_22_59.png"
        alt=""
        width="311"
        height="415"
      />
      <img
        src="http://upload.cxycsx.vip/%E7%AE%80%E7%BA%A6%E6%89%8B%E7%BB%98%E9%A3%8E%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E6%B8%85%E5%8D%95%E6%94%BB%E7%95%A5%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-11+02_21_48.png"
        alt=""
        width="311"
        height="415"
      />
      <img
        src="http://upload.cxycsx.vip/%E7%AE%80%E7%BA%A6%E6%89%8B%E7%BB%98%E9%A3%8E%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E6%B8%85%E5%8D%95%E6%94%BB%E7%95%A5%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-11+02_21_21.png"
        alt=""
        width="311"
        height="415"
      />

      <img
        src="http://upload.cxycsx.vip/%E7%AE%80%E7%BA%A6%E6%89%8B%E7%BB%98%E9%A3%8E%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E6%B8%85%E5%8D%95%E6%94%BB%E7%95%A5%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-11+02_20_36.png"
        alt=""
        width="311"
        height="415"
      />

      <img
        src="http://upload.cxycsx.vip/%E7%AE%80%E7%BA%A6%E6%89%8B%E7%BB%98%E9%A3%8E%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E6%B8%85%E5%8D%95%E6%94%BB%E7%95%A5%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-11+02_19_44.png"
        alt=""
        width="311"
        height="415"
      />

      <img
        src="http://upload.cxycsx.vip/%E7%AE%80%E7%BA%A6%E6%89%8B%E7%BB%98%E9%A3%8E%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E6%B8%85%E5%8D%95%E6%94%BB%E7%95%A5%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-12+20_15_43.png"
        alt=""
        width="311"
        height="415"
      />
    </div>

    <div
      className="mb-6 bg-gradient-to-br from-sky-500 to-sky-400 bg-clip-text text-2xl font-bold text-transparent"
      id="problem"
      style={{ marginTop: '30px' }}
    >
      Python爬虫数据采集VIP课程（赠送, 最新录制）
    </div>

    <div className="text-customGrayText flex flex-row flex-wrap gap-6">
      <img
        src="http://upload.cxycsx.vip/%E7%98%A6%E8%BA%AB%E7%9F%A5%E8%AF%86%E7%A7%91%E6%99%AE%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-12+20_32_55.png"
        alt=""
        width="311"
        height="415"
      />
      <img
        src="http://upload.cxycsx.vip/%E7%98%A6%E8%BA%AB%E7%9F%A5%E8%AF%86%E7%A7%91%E6%99%AE%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-12+20_33_28.jpg"
        alt=""
        width="311"
        height="415"
      />
      <img
        src="http://upload.cxycsx.vip/%E7%98%A6%E8%BA%AB%E7%9F%A5%E8%AF%86%E7%A7%91%E6%99%AE%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-12+20_33_46.jpg"
        alt=""
        width="311"
        height="415"
      />
      <img
        src="http://upload.cxycsx.vip/%E7%98%A6%E8%BA%AB%E7%9F%A5%E8%AF%86%E7%A7%91%E6%99%AE%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-12+20_34_08.jpg"
        alt=""
        width="311"
        height="415"
      />
      <img
        src="http://upload.cxycsx.vip/%E7%98%A6%E8%BA%AB%E7%9F%A5%E8%AF%86%E7%A7%91%E6%99%AE%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-12+20_34_37.jpg"
        alt=""
        width="311"
        height="415"
      />
      <img
        src="http://upload.cxycsx.vip/%E7%98%A6%E8%BA%AB%E7%9F%A5%E8%AF%86%E7%A7%91%E6%99%AE%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-12+20_34_58.jpg"
        alt=""
        width="311"
        height="415"
      />
      <img
        src="http://upload.cxycsx.vip/%E7%98%A6%E8%BA%AB%E7%9F%A5%E8%AF%86%E7%A7%91%E6%99%AE%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-12+20_35_36.jpg"
        alt=""
        width="311"
        height="415"
      />
      <img
        src="http://upload.cxycsx.vip/%E7%98%A6%E8%BA%AB%E7%9F%A5%E8%AF%86%E7%A7%91%E6%99%AE%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-12+20_35_58.jpg"
        alt=""
        width="311"
        height="415"
      />

      <img
        src="http://upload.cxycsx.vip/%E7%98%A6%E8%BA%AB%E7%9F%A5%E8%AF%86%E7%A7%91%E6%99%AE%E5%B0%8F%E7%BA%A2%E4%B9%A6%E9%85%8D%E5%9B%BE__2024-11-12+20_36_23.jpg"
        alt=""
        width="311"
        height="415"
      />
    </div>

    <div
      className="mb-6 bg-gradient-to-br from-sky-500 to-sky-400 bg-clip-text text-2xl font-bold text-transparent"
      id="problem"
      style={{ marginTop: '30px' }}
    >
      常见问题
    </div>
    <div className="text-customGrayText flex flex-col gap-4">
      <h1 className="bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-lg font-bold text-transparent">
        问: 我是学易语言/PHP的，这套课程能否报名？
      </h1>
      <p>答: JS逆向部分是相通的，易语言/PHP同样可以执行JS代码</p>

      <h1 className="bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-lg font-bold text-transparent">
        问: 这套课程是否包含安卓APP逆向？
      </h1>
      <p className="">答: 不包含，目前录制更新的只有这一套JS逆向实战课程</p>

      <h1 className="bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-lg font-bold text-transparent">
        问: 学完这套课程，能达到什么样的水平？
      </h1>
      <p className="">
        答:
        能够达到兼职接单水平，课程实战包含真实JS逆向实战接单案例。这门课程虽不敢说让你直接成为大神。但是达到初中级水平是没问题的
        并且适合零基础入门JS逆向, 整套课程没有一点车轱辘话 都是实战。
      </p>

      <h1 className="bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-lg font-bold text-transparent">
        问: 课程以什么形式发货？
      </h1>
      <p className="">
        答: 百度网盘链接，视频加密，个人专属更新链接，一人一号，视频加密
      </p>

      <h1 className="bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-lg font-bold text-transparent">
        问: 课程目前更新了哪些内容？
      </h1>
      <p className="">
        答: 目前已经更新逆向视频400+节视频 每个视频在10分钟左右,
        包含基础+实战+进阶, 包含大量实战案例 如dy、xhs、jd等
      </p>

      <h1 className="bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-lg font-bold text-transparent">
        问: 课程是否支持试听？
      </h1>
      <p className="">答: B站已发布了大量实战公开课，先试听，再决定是否入手</p>

      <h1 className="bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-lg font-bold text-transparent">
        问: 课程是否有优惠？
      </h1>
      <p className="">
        答:
        没有，售价1299，随着课程内容的完善，会重新调整定价。这也是对第一批支持陈师兄用户的回馈。所以，越早入手越划算！
      </p>
    </div>

    {/* <BlogGallery postList={props.postList} /> */}
  </Section>
);

export { RecentPosts };
