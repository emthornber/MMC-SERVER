################################################################################
#   Makefile for building the MMC-SERVER application packages for MacOS
#
#   30 June, 2026 - E M Thornber
#   Created
#
#	Copyright (c) 2026 Model Electronics Railway Group Ltd
################################################################################

#APPNAME=${shell npm pkg get name | tr -d '"'}
APPNAME=MMC-SERVER
VERSION=${shell npm pkg get version | tr -d '"'}
EPM := $(shell which epm)
OSNAME=${shell uname -s}
ARCH=${shell uname -m}
DDIR := dist/pug
ODIR := InstallAndRun/MacOS
APPPKG := InstallAndRun/MacOS/MMC-PKG.epm
APPTAR := InstallAndRun/MacOS/MMC-TAR.epm
EXCLUDE_FILE="MMC-SERVER/InstallAndRun/MacOS/excluded_files.txt"
CP=/bin/cp -f
GZIP=/usr/bin/gzip
RM=/bin/rm -f
TS=`date "+%y%m%d-%H%M"`
TAR=/usr/bin/tar

EPMARGS := -vv --output-dir $(ODIR) appname=${APPNAME} version=${VERSION} $(APPNAME)

all: macos

.PHONY: all macos plist spa src

macos : plist spa src
	npm shrinkwrap
	$(RM) $(ODIR)/$@-*.log
	$(EPM) -a all -f $@ ${EPMARGS} $(APPPKG) 2>&1 | tee $(ODIR)/$@-$(TS).log

plist:
	( cd ${ODIR} && sed -e "s/|version|/${VERSION}/g" Info.plist.in > Info.plist )

spa:
	${CP} ../MMC-CLIENT/dist/MMC-CLIENT-bundle-*.tar.gz ${ODIR}/

src:
	( cd .. && \
		${TAR} -cvf - --exclude-vcs --exclude-from ${EXCLUDE_FILE} MMC-SERVER/* ) | \
		${GZIP} -9 > InstallAndRun/MacOS/${APP_NAME}-source-${VERSION}.tar.gz