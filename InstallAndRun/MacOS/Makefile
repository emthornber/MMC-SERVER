################################################################################
#   Makefile for building the MMC-SERVER application packages for MacOS
#
#	30 June, 2026 - E M Thornber
#	Created
#
#	20 November, 2026 - E M Thornber
#	Add Installation instructions to MacOS disk image
#
#	Copyright (c) 2026 Model Electronics Railway Group Ltd
################################################################################

#APPNAME=${shell npm pkg get name | tr -d '"'}
MDIR=MacOS
APPNAME=MMC-SERVER
APPPKG := $(MDIR)/MMC-PKG.epm
ARCH := all
VERSION=${shell npm pkg get version | tr -d '"'}

# Tools
EPM := $(shell which epm)
HDIUTIL := $(shell which hdiutil)
RM=/bin/rm -f
TS=`date "+%y%m%d-%H%M"`

EPMARGS := -nsm -vv --output-dir $(MDIR) appname=${APPNAME} version=${VERSION} $(APPNAME)
HDIUTILARGS := -ov -srcfolder ${MDIR}/${APPNAME}.pkg -srcfolder ${MDIR}/INSTALLATION.txt -volname ${APPNAME}-${VERSION} 

all: macos

.PHONY: all macos

macos:
	$(RM) $(MDIR)/$@-*.log
	sed -e "s/|version|/${VERSION}/g" $(MDIR)/Info.plist.in > $(MDIR)/Info.plist
	$(EPM) -a ${ARCH} -f $@ ${EPMARGS} $(APPPKG) 2>&1 | tee $(MDIR)/$@-$(TS).log
	$(HDIUTIL) create ${HDIUTILARGS} ${MDIR}/${APPNAME}-${VERSION}-$@-${ARCH}.dmg
