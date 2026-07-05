################################################################################
#   Makefile for building the MMC-SERVER application packages for MacOS and Linux
#
#   5 July, 2026 - E M Thornber
#   Created
#
#	Copyright (c) 2026 Model Electronics Railway Group Ltd
################################################################################

#APPNAME=${shell npm pkg get name | tr -d '"'}
APPNAME=MMC-SERVER
APPDIR=${shell basename $(PWD)}
EXCLUDE_FILE="$(APPDIR)/InstallAndRun/excluded_files.txt"
VERSION=${shell npm pkg get version | tr -d '"'}
WORKDIR=InstallAndRun

# Tools
CP=/bin/cp -f
GZIP=/usr/bin/gzip
RM=/bin/rm -f
TAR=/usr/bin/tar
TS=`date "+%y%m%d-%H%M"`

all: debian macos

.PHONY: all debian macos src

debian : src
	make -C ${WORKDIR}/Linux deb

macos : src
	make -C ${WORKDIR}/MacOS macos

src:
	( cd ${WORKDIR} && sed -e "s/|appdir|/${APPDIR}/g" excluded_files.txt.in > excluded_files.txt )
	npm shrinkwrap
	( cd .. && \
		${TAR} -cvf - --exclude-vcs --exclude-from ${EXCLUDE_FILE} ${APPDIR}/* ) | \
		${GZIP} -9 > ${WORKDIR}/${APPNAME}-source-${VERSION}.tar.gz