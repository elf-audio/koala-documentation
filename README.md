# Koala - Documentation

## note to Marek for deployment

there is a clone in the dropbox koala folder (in manual) with a deploy.sh in there to install on the server.

Once edits have been made, run `./build.sh` to resize images correctly and generate the pdf manual

Then to deploy: `./deploy.sh` from the folder enclosing the repo.

---

## Project functions

### Run the project

Run the project in developing mode.

```shell
bundle exec jekyll serve
```

### Build the project

Build the project.

```shell
bundle exec jekyll build
```

### Mine images from PSD files

The application parses images from `canvases/mobile.psd` and `canvases/tablet.psd` files.

`canvases/mobile.example.psd` and `canvases/tablet.example.psd` files are used as examples. Create your own PSDs based on them. If you get any unexpected results just compare your and example PSDs.

The script generates `images/mobile-file-list.txt` and `images/tablet-file-list.txt` files with lists of paths to generated files.

For instance,

```
----------------------
images/2/tablet/IMG_8151|serform
images/2/tablet/IMG_8150|sequence
images/2/tablet/IMG_8148|sample
----------------------
images/3/tablet/IMG_8153|copy
```

**Mine your PSD!**

Images add into the `images/` folder.

```shell
python mine-psd.py
```

# Set up working environment

Prepare your working space to start working on.

## Python

1. Initiate a fresh Python virtual environment if it does not exist yet.

```shell
python -m venv venv
```

OR

```shell
python3 -m venv venv
```

2. Activate a Python's environment

```shell
source venv/bin/activate
```

3. Install dependencies

```shell
pip install -r requirements.txt
```

## Ruby

1. Select a project's ruby version which is in the `.ruby-version` file.

```shell
rvm use
```

2. Install dependencies.

```shell
bundle install
```

### Install Ruby

If you need to install Ruby and encounter different troubles along the way then you should look at the recommendations below.

---

###### [Install](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rvm-on-ubuntu-20-04) _ruby_ using _rvm_.

---

##### Solutions to potentials problems

Installation ruby via _rvm_ generates the next error.

```
Error running '__rvm_make -j16',
please read /home/stas/.rvm/log/1692449785_ruby-3.0.0/make.log

There has been an error while running make. Halting the installation.
```

[Point OpenSSL during installation](https://stackoverflow.com/questions/75589447/how-to-fix-the-running-rvm-make-j4-error-while-installing-ruby-3-2-1-us)

---

Running <u>bundle</u> raises an OpenSSL error.

```
Could not load OpenSSL.
You must recompile Ruby with OpenSSL support or change the sources in your Gemfile from 'https' to 'http'. Instructions for compiling with OpenSSL
using RVM are available at rvm.io/packages/openssl.
```

[Reinstall Ruby pointing OpenSSL during the installation](https://stackoverflow.com/questions/37336573/unable-to-require-openssl-install-openssl-and-rebuild-ruby-preferred-or-use-n)

```shell
rvm reinstall 3.1.4 --with-openssl-dir=/usr/bin/openssl
```

[Reinstall Ruby with disabled "autolibs"](https://github.com/rvm/rvm/issues/4357#issuecomment-390640479)

```shell
rvm install 3.14 --autolibs=disable
```

---

```
RVM is not a function, selecting rubies with 'rvm use ...' will not work
```

[Run shell in a login shell mode](https://stackoverflow.com/questions/23963018/rvm-is-not-a-function-selecting-rubies-with-rvm-use-will-not-work)
