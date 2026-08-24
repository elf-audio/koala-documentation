#!/bin/zsh

# Safety check: ensure the site has been built (incl. PDF) before deploying
if [ ! -f "_site/index.html" ] || [ ! -f "_site/koala-sampler-manual.pdf" ]; then
	printf '\033[1;31m%s\033[0m\n' "Error: _site/ incomplete (missing index.html or koala-sampler-manual.pdf). Run ./build.sh first."
	exit 1
fi

if rsync -e "/usr/bin/ssh" --bwlimit=2000 -az --delete --no-t --no-perms \
	--progress \
	--stats \
	--exclude='.DS_Store' \
	_site/ marek@elf-audio.com:/var/www/manual.koalasampler.com/html; then
	printf '\n\033[1;32m%s\033[0m\n' "==============================="
	printf '\033[1;32m%s\033[0m\n' "🚀  Deployed successfully!  ✅"
	printf '\033[1;32m%s\033[0m\n\n' "==============================="
else
	printf '\n\033[1;31m%s\033[0m\n' "###############################"
	printf '\033[1;31m%s\033[0m\n' "💀  Deploy failed!  ☠️"
	printf '\033[1;31m%s\033[0m\n\n' "###############################"
	echo "This script can fail if you're using the stock "\
		"version of macOS's rsync - you need to install a "\
		"newer version via homebrew (brew install rsync)."
	exit 1
fi
