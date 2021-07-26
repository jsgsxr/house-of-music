import Image from "next/image"

const postData = [
    {
      postAuthor: "Sephiroth",
      path: "/sephProfile",
      profileImg: '/images/sephiroth.jpeg',
      postText: 'Just had a Killer Night with the Fam',
      postContent: <Image src='/images/sephpostimage.jpeg' position="relative" layout='fill' objectFit='cover' alt="story" />,
      reactions: {
        likes: 5,
        loves: 4,
        fires: 3,
        total: 12, 
      },
      reactionsTotal: 12,
      isliked: true,
      commentCount: 4,
      shareCount: 5,
      sharable: true,
    },
  ]
  
  export default postData;