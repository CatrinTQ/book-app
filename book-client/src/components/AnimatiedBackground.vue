<template>
    <div class="svg-bg">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect x="0" y="0" width="100" height="40" fill="#87ceeb" />
        <rect x="0" y="40" width="100" height="60" fill="#4caf50" />
      </svg>
    </div>
  </template>
  
  <style scoped>
  .svg-bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  svg {
    width: 100%;
    height: 100%;
  }
  </style>
  