################################################################################
#   Makefile for building the MMC-SERVER application packages for MacOS
#
#   30 June, 2026 - E M Thornber
#   Created
#
#	Copyright (c) 2026 Model Electronics Railway Group Ltd
################################################################################

#APPNAME=${shell npm pkg get name | tr -d '"'}
MDIR=MacOS
APPNAME=MMC-SERVER
APPPKG := $(MDIR)/MMC-PKG.epm
VERSION=${shell npm pkg get version | tr -d '"'}

# Tools
EPM := $(shell which epm)
RM=/bin/rm -f
TS=`date "+%y%m%d-%H%M"`

EPMARGS := -nsm -vv --output-dir $(MDIR) appname=${APPNAME} version=${VERSION} $(APPNAME)

all: macos

.PHONY: all macos

macos:
	$(RM) $(MDIR)/$@-*.log
	sed -e "s/|version|/${VERSION}/g" $(MDIR)/Info.plist.in > $(MDIR)/Info.plist
	$(EPM) -a all -f $@ ${EPMARGS} $(APPPKG) 2>&1 | tee $(MDIR)/$@-$(TS).log
