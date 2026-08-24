rm -Rf _site
bundle exec jekyll build || exit 1

./half-size-images.zsh _site/assets/images || exit 1
./half-size-images.zsh _site/assets/images/tablet/ || exit 1

echo "starting webserver for pdf generation"
# Start Python's HTTP server in the background
python3 -m http.server --directory "_site" 1843 &
# Save the PID of the server so we can kill it later
SERVER_PID=$!

# Give the server a moment to start up
sleep 2

echo "Generating PDF"
# Generate the PDF using Puppeteer
node generate-pdf.js || { kill $SERVER_PID; exit 1; }

# Kill the Python server after the job is done
kill $SERVER_PID

cp koala-sampler-manual.pdf _site/koala-sampler-manual.pdf

# Check links last, once the PDF is in place
echo "Checking links"
node check-links.js || exit 1
