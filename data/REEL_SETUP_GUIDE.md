# HOW TO SETUP INSTAGRAM REELS ON TREVA WEBSITE

## STEP 1: Download Instagram Reels
1. Go to your Instagram profile
2. Find the reels you want to showcase
3. Use an Instagram reel downloader tool (search "Instagram reel downloader" online)
4. Download each reel as an MP4 file

**Recommended specs:**
- Format: MP4 (H.264)
- Resolution: 1080x1920 (9:16 aspect ratio) - standard reel size
- Duration: 15-60 seconds
- File size: Keep under 10MB each for fast loading

## STEP 2: Upload Videos to Your Website
```bash
# Create the videos directory (if not exists)
mkdir -p /workspaces/Treva-Website/public/videos/

# Upload your downloaded reels:
# - reel1.mp4
# - reel2.mp4
# - reel3.mp4
# - reel4.mp4
# - reel5.mp4
# ... up to reel10.mp4
```

## STEP 3: Create Thumbnails (Optional but Recommended)
```bash
# Create thumbnails directory
mkdir -p /workspaces/Treva-Website/public/images/reel-thumbs/

# Create thumbnail images (JPEG/PNG) from your reels
# Recommended: 1080x1920 pixels (same aspect ratio as video)
# Name them: reel1-thumb.jpg, reel2-thumb.jpg, etc.
```

## STEP 4: Update the ReelCarousel Configuration
In `pages/index.jsx`, update the `instagramReels` array with your actual file names:

```javascript
const instagramReels = [
  { url: '/videos/reel1.mp4', thumbnail: '/images/reel-thumbs/reel1-thumb.jpg', caption: 'Your caption here' },
  { url: '/videos/reel2.mp4', thumbnail: '/images/reel-thumbs/reel2-thumb.jpg', caption: 'Caption 2' },
  // ... up to 10 reels
];
```

**Note:** The `thumbnail` field is optional. If you don't have thumbnails, remove that line or set it to an empty placeholder image.

## STEP 5: Verify Installation
After uploading videos:
1. Run the dev server: `npm run dev`
2. Open https://localhost:3000
3. The reels should autoplay (muted) in the carousel
4. Use left/right arrows to navigate between reels
5. Videos should loop continuously

## TROUBLESHOOTING

### Video not playing?
- Check browser console for errors (F12 → Console)
- Verify video file exists at `public/videos/reel1.mp4`
- Check file permissions (should be readable)
- Ensure video format is MP4 with H.264 codec

### Reel container too big/small?
The container aspect ratio is locked to 9:16 (standard Instagram reel size). Adjust in code:
```css
aspect-[9/16]  /* Change to aspect-square for square, or custom like aspect-video */
```

### Autoplay not working?
Videos require `muted` attribute to autoplay in modern browsers. This is already set. If still not working, check:
- Video file might be corrupted
- Browser might block autoplay (user must interact with page first)

## TECHNICAL IMPLEMENTATION DETAILS
- Uses HTML5 `<video>` element with `autoPlay`, `loop`, `muted`, `playsInline`
- React `key` prop triggers video switch (enables autoplay on change)
- Container uses `aspect-[9/16]` for consistent 9:16 reel format
- Max width constrained to 400px for mobile-first design
- Fully responsive with Tailwind CSS

## READY VIDEO PLACEHOLDER
If you don't have actual videos yet, you can use a placeholder:
```javascript
const instagramReels = [
  { url: '/videos/placeholder.mp4', thumbnail: '/images/placeholder.jpg', caption: 'Coming Soon' },
];
```

Upload a sample MP4 video to test the carousel works.
