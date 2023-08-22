import React from 'react';
import {
  HomeIcon,
  HeartIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import { IconButton } from './IconButton';
export const Sidebar = () => {
  return (
    <div className="text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen  sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block">
      <div className="space-y-4">
        <IconButton icon={HomeIcon} label="Home" />
        <IconButton icon={SearchIcon} label="Search" />
        <IconButton icon={LibraryIcon} label="Your library" />
        <IconButton icon={PlusCircleIcon} label="Create playlist" />
        <IconButton icon={HeartIcon} label="Liked song" />
        <IconButton icon={RssIcon} label="Your episodes" />
      </div>
    </div>
  );
};
