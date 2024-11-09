import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  BlogGallery,
  GradientText,
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

      <div className="mb-6 text-2xl font-bold bg-gradient-to-br from-sky-500 to-sky-400 bg-clip-text text-transparent" id="cxycsx">
        程序员陈师兄
      </div>

      <div className='text-customGrayText flex flex-col gap-3'>

        <p className='font-bold text-lg bg-gradient-to-br from-lime-500 to-lime-400 bg-clip-text text-transparent' style={{marginBottom: 20}}>
          
          程序员陈师兄， B站人气UP主，课程风格通俗易懂， 简洁无任何废话。
          熟悉Java/Python/JS/Go等多种语言。
          因为工作需要, 最早接触JS逆向在2020年, 并在2021年在B站发布了第一套JS逆向实战课程, 收获了大量好评，很多人都是通过这套课程学习的JS逆向。
          因为是在工作中总结提炼出来的课程, 所以课程总体风格都是偏向实战。总之， 如果你想学习JS逆向, 这门课程将会是你的不二之选。

        </p>


      </div>
    

      <div className="mb-6 text-2xl font-bold bg-gradient-to-br from-sky-500 to-sky-400 bg-clip-text text-transparent" id="problem">
          常见问题
      </div>
      <div className='text-customGrayText flex flex-col gap-4'>

        <h1 className='font-bold text-lg bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-transparent'>问: 我是学易语言/PHP的，这套课程能否报名？</h1>
        <p >答: JS逆向部分是相通的，易语言/PHP同样可以执行JS代码</p>

        <h1 className='font-bold text-lg bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-transparent'>问: 这套课程是否包含安卓APP逆向？</h1>
        <p className=''>答: 不包含，目前录制更新的只有这一套JS逆向实战课程</p>

        <h1 className='font-bold text-lg bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-transparent'>问: 学完这套课程，能达到什么样的水平？</h1>
        <p className=''>答: 能够达到兼职接单水平，课程实战包含真实JS逆向实战接单案例</p>

        <h1 className='font-bold text-lg bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-transparent'>问: 课程以什么形式发货？</h1>
        <p className=''>答: 百度网盘链接，视频加密，个人专属更新链接，一人一号，视频加密</p>

        <h1 className='font-bold text-lg bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-transparent'>问: 课程目前更新了哪些内容？</h1>
        <p className=''>答: 目前已经更新逆向视频200+节视频 每个视频在10分钟左右, 包含基础+实战+进阶, 包含大量实战案例 如dy、xhs、jd等</p>

        <h1 className='font-bold text-lg bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-transparent'>问: 课程是否支持试听？</h1>
        <p className=''>答: B站已发布了大量实战公开课，先试听，再决定是否入手</p>

        <h1 className='font-bold text-lg bg-gradient-to-br from-gray-500 to-gray-400 bg-clip-text text-transparent'>问: 课程是否有优惠？</h1>
        <p className=''>答: 没有，售价1299，随着课程内容的完善，会重新调整定价。这也是对第一批支持陈师兄用户的回馈。所以，越早入手越划算！</p>

      </div>










    {/* <BlogGallery postList={props.postList} /> */}
  </Section>
  
);

export { RecentPosts };
