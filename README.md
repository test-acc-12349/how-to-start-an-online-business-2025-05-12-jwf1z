# BusinessPlan.AI Landing Page Maintenance Guide

This guide will help you maintain and customize the BusinessPlan.AI landing page. Whether you're new to web development or need a quick reference, follow these detailed instructions for common updates.

## Table of Contents
1. [Updating Text and Tailwind CSS Classes](#updating-text-and-tailwind-css-classes)
2. [Fixing Broken Links](#fixing-broken-links)
3. [Linking Privacy and Terms Pages](#linking-privacy-and-terms-pages)
4. [Troubleshooting](#troubleshooting)

## Updating Text and Tailwind CSS Classes

### Header Section
The header contains the logo and navigation menu. To update:

```html
<!-- Logo Text -->
<a href="/" class="text-xl font-bold text-blue-600">BusinessPlan.AI</a>
```
- Replace "BusinessPlan.AI" with your desired logo text
- The `text-blue-600` class controls the blue color
- `text-xl` controls the size

### Hero Section
Located at the top of the page:

```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
    How To Start An Online Business
</h1>
<p class="text-xl md:text-2xl text-gray-600 mb-8">
    3 Step Business Plan Generator
</p>
```
- Update the text between the tags
- Size classes explained:
  - `text-4xl`: Default size
  - `md:text-5xl`: Size on medium screens
  - `lg:text-6xl`: Size on large screens

### Features Section
Each feature card follows this structure:

```html
<div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 class="text-xl font-semibold mb-4">Get Ideas</h3>
    <p class="text-gray-600">Discover profitable business ideas...</p>
</div>
```
- Update text within `<h3>` and `<p>` tags
- Key classes:
  - `rounded-2xl`: Rounds corners
  - `shadow-lg`: Adds shadow
  - `hover:shadow-xl`: Enlarges shadow on hover

## Fixing Broken Links

### Navigation Menu Links
Current navigation links:

```html
<div class="hidden md:flex space-x-8">
    <a href="#features" class="text-gray-600 hover:text-blue-600">Features</a>
    <a href="#benefits" class="text-gray-600 hover:text-blue-600">Benefits</a>
    <a href="#faq" class="text-gray-600 hover:text-blue-600">FAQ</a>
</div>
```

To update:
1. Locate the `href` attribute
2. Replace "#features" with your desired link
3. For internal sections, keep the "#" prefix
4. For external links, use complete URLs (e.g., "https://example.com")

### Call-to-Action Buttons
Current CTA links:

```html
<a href="https://ninja200.online" class="inline-flex items-center px-8 py-4 rounded-full bg-blue-600">
    Generate Your Plan Now
</a>
```

To update:
1. Replace "https://ninja200.online" with your destination URL
2. Ensure the URL includes "https://" or "http://"
3. Test the link after updating

## Linking Privacy and Terms Pages

### Footer Links Section
Located at the bottom of the page:

```html
<div>
    <h4 class="text-lg font-semibold text-white mb-4">Legal</h4>
    <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
    </ul>
</div>
```

To add privacy and terms pages:
1. Create `privacy.html` and `terms.html` in your root directory
2. Update the links:
```html
<li><a href="privacy.html" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
<li><a href="terms.html" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
```

## Troubleshooting

### Common Issues and Solutions

1. **Broken Layout**
   - Check that you haven't removed any essential Tailwind classes
   - Verify all `div` tags are properly closed
   - Maintain the responsive classes (e.g., `md:`, `lg:` prefixes)

2. **Links Not Working**
   - Ensure URLs begin with "http://" or "https://"
   - For internal links, verify the "#" prefix
   - Check for typos in file names and paths

3. **Styles Not Applying**
   - Verify the Tailwind CDN link is present in the `<head>`
   - Check for conflicting class names
   - Ensure proper class spelling

### Need Help?
If you encounter issues:
1. Check the browser's developer tools (F12) for errors
2. Verify all changes against the original code
3. Test the page on different screen sizes
4. Ensure all files are in the correct directory structure

Remember to always backup your code before making changes and test thoroughly after updates.