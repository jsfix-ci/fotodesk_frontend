import React, {useState} from 'react';
import UploadStepTwoImage from '../components/UploadStepTwoImage';
import thumb from '../components/Gallery/thumb.jpeg';

export default function UploadStepTwo({hasSidebar}: any) {
  const [imageWithTags, setImageWithTags] = useState(new Array(12).fill({thumb, tags: ''}));

  function handleChange(event: any, id: any) {
    const tag = event.target.value;
    setImageWithTags((prevState) => {
      const copyState = [...prevState];
      copyState[id] = {...copyState[id], tags: tag};
      return copyState;
    });
    console.log(imageWithTags.map((e) => e.tags));
  }

  return (
    <div className="container">
      <div className="row m-0">
        {imageWithTags.map((upload: any, id: any) => (
          <UploadStepTwoImage
            key={id}
            isEmpty={upload.tags.length === 0}
            thumb={upload.thumb}
            hasSidebar={hasSidebar}
            handleChange={(e: any) => handleChange(e, id)}
            addTags={imageWithTags}
          />
        ))}
      </div>
    </div>
  );
}
