################################################################################
#   Makefile for building the MMC-SERVER application packages for Debian Linux
#
#   30 June, 2026 - E M Thornber
#   Created
#
#	Copyright (c) 2026 Model Electronics Railway Group Ltd
################################################################################

#APPNAME=${shell npm pkg get name | tr -d '"'}
LDIR=Linux
APPNAME=MMC-SERVER
APPPKG := $(LDIR)/MMC-PKG.epm
VERSION=${shell npm pkg get version | tr -d '"'}

# Tools
EPM := $(shell which epm)
RM=/bin/rm -f
TS=`date "+%y%m%d-%H%M"`

EPMARGS := -nsm -vv --output-dir $(LDIR) appname=${APPNAME} version=${VERSION} $(APPNAME)

all: deb

.PHONY: all deb

deb:
	$(RM) $(LDIR)/$@-*.log
	$(EPM) -a all -f $@ ${EPMARGS} $(APPPKG) 2>&1 | tee $(LDIR)/$@-$(TS).log
