import React from 'react'
function ReadMore({content,link ='#'}){
  const newText = content.slice(0,10);
  return(
    <>
    {newText}
    <a href= {link} className ='text-red-500 hover:text-red-900'>...Read More</a>
    </>
  )
}
export default function CardP() {
  return (
    <div className='w-[50%] bg-white rounded-md flex my-4'> 
    <img src="/images/test.jpg" alt="" className='w-[200px] rounded-tl-md object-cover'/>
    <div className='flex-col p-3'>
      <h3 className='text-3xl font-extrabold mb-2'> Title of the Petition</h3>
      <ReadMore content ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum necessitatibus aspernatur fugit possimus facere culpa cupiditate illo obcaecati dolorem velit modi dolor illum quaerat numquam at, ducimus ab. Odit, esse.
            Perferendis animi ipsa fuga veritatis. At impedit autem debitis odio iste aspernatur odit recusandae ad, vitae eum perspiciatis sequi numquam, magni aliquam. Quasi molestiae qui deserunt, laborum minima voluptas nam.
            Laudantium odio autem sapiente odit dignissimos, ad dicta omnis, nisi voluptatum deleniti dolor quasi perferendis maxime necessitatibus accusamus amet dolore veritatis, quibusdam aliquid. Repudiandae, earum sint fugiat totam tempore labore!
            Quos architecto obcaecati magni a natus facilis aperiam autem adipisci sapiente totam hic, fugit nostrum esse et maiores? Velit laboriosam ex expedita illum ipsum assumenda molestiae dolor neque ipsa aliquam.
            Eligendi consequatur dolor nemo in accusamus quibusdam quia esse iste quae nulla mollitia saepe dolores fuga qui, eius voluptatem alias cupiditate velit obcaecati ducimus incidunt consequuntur aut adipisci. Quia, culpa!
            Minima veniam, quas minus fugiat repellat delectus vitae officiis velit, repellendus molestias fugit odit incidunt non reiciendis ab et itaque. Consectetur optio consequuntur asperiores minima debitis, enim nulla vel vero?
            Nulla aliquam aperiam dolores, libero quas, numquam eveniet ipsam aut nihil ea accusamus, doloribus quod. Cupiditate expedita sapiente eaque dolore eveniet inventore odit exercitationem accusamus error, repudiandae sint laboriosam iste!
            Distinctio explicabo voluptatibus vero numquam, culpa deserunt, quam provident iste, consequuntur neque tempora? Cum natus voluptate illum quis, vitae quidem impedit fuga earum eum enim sequi velit reiciendis, veritatis voluptates.
            Ullam dolore nisi temporibus cum, ducimus tenetur nesciunt. Ut assumenda eos omnis reiciendis cum molestiae nisi eaque esse. Reiciendis, accusantium. Molestiae, atque quod voluptatem repudiandae vel officia minus debitis eveniet?
            Iste beatae eligendi, corporis quam eveniet cupiditate laboriosam mollitia. Deserunt ducimus fugiat esse adipisci rerum nesciunt, maxime illo est vitae suscipit quia qui officiis consequatur dolorem possimus praesentium. Harum, eum?
            Impedit ratione saepe adipisci molestias obcaecati consectetur inventore in illo, accusamus qui ex officiis voluptatum dolorem nisi et animi minima dolore odio quo deleniti sunt nobis iure accusantium. Minus, quas.
            Aliquid repellendus quaerat, in odio molestias a delectus nesciunt ipsam soluta quasi consequuntur nostrum, corporis voluptas culpa sint voluptate quidem sequi esse eligendi. Sit consequatur sint distinctio esse, vel iste." link='www.test.com'/>
    </div>
    </div>
  )
}
