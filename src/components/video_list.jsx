import React from 'react';
import { useSelector } from 'react-redux';
import VideoListItem from './video_list_item';

function VideoList(props) {
  const videos = useSelector((state) => (state.video.list));
  const videoItems = videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return (
    <ul>
      {videoItems}
    </ul>
  );
}

export default VideoList;
