rm -Rf _site
bundle exec jekyll build

echo "Checking links"
node check-links.js --exclude=one-page || exit 1
./half-size-images.zsh _site/assets/images
./half-size-images.zsh _site/assets/images/tablet/
rm _site/build.sh
rm _site/CODE_OF_CONDUCT.md
rm _site/History.markdown
rm _site/half-size-images.zsh
rm _site/LICENSE.txt
rm _site/mine-psd.py
rm _site/minima.gemspec
rm _site/README.md
rm _site/requirements.txt
rm _site/screenshot.png
rm _site/generate-pdf.js
rm _site/check-links.js
rm _site/readme_banner.svg
rm -Rf _site/canvases
rm -Rf _site/script

echo "starting webserver for pdf generation"
# Start Python's HTTP server in the background
python -m http.server --directory "_site" 1843 &
# Save the PID of the server so we can kill it later
SERVER_PID=$!

# Give the server a moment to start up
sleep 2

echo "Generating PDF"
# Generate the PDF using Puppeteer
node generate-pdf.js

# Kill the Python server after the job is done
kill $SERVER_PID

cp koala-sampler-manual.pdf _site/koala-sampler-manual.pdf