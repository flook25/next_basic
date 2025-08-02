'use client';

import React from 'react';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div>
      <h1>{title}</h1>
    
    </div>
  );
}