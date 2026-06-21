################################################################################
#   Makefile for building the MMC-SERVER application packages for MacOS
#
#   31 May, 2026 - E M Thornber
#   Created
#
#	17 June, 2026 - E M Thornber
#	Added support for the new SPA front-end resources.
#
#	Copyright (c) 2026 Model Electronics Railway Group Ltd
################################################################################

#APPNAME=${shell npm pkg get name | tr -d '"'}
APPNAME=MMC-SERVER
VERSION=${shell npm pkg get version | tr -d '"'}
EPM := $(shell which epm)
OSNAME=${shell uname -s}
ARCH=${shell uname -m}
DDIR := distribution/pug
ODIR := InstallAndRun/MacOS
APPPKG := InstallAndRun/MacOS/MMC-PKG.epm
APPTAR := InstallAndRun/MacOS/MMC-TAR.epm
CP=/bin/cp -f
RM=/bin/rm -f
TS=`date "+%y%m%d-%H%M"`

TARBALL=MMC-CLIENT_${OSNAME}_${ARCH}

EPMARGS := -vv --output-dir $(ODIR) appname=${APPNAME} version=${VERSION} $(APPNAME)

all: pkgs

pkgs: portable macos

.PHONY: all pkgs macos portable spa public

macos : spa
	$(RM) $(ODIR)/$@-*.log
	$(EPM) -a arm -f $@ ${EPMARGS} $(APPPKG) 2>&1 | tee $(ODIR)/$@-$(TS).log

portable : spa
	$(RM) $(ODIR)/$@-*.log
	$(EPM) -a all -f $@ ${EPMARGS} $(APPTAR) 2>&1 | tee $(ODIR)/$@-$(TS).log

spa:
	${RM} -Rf ${ODIR}/$@/
	${CP} ../MMC-CLIENT/dist/${TARBALL}_*.tar.gz ${ODIR}/
	(cd ${ODIR} && tar -xzf ${TARBALL}_*.tar.gz)
	rm -f ${ODIR}/${TARBALL}_*.tar.gz

public:
	${RM} -Rf ${DDIR}/$@/
	${CP} ../MMC-CLIENT/dist/${TARBALL}_*.tar.gz ${DDIR}/
	(cd ${DDIR} && tar -xzf ${TARBALL}_*.tar.gz)
	mv ${DDIR}/spa ${DDIR}/$@
	rm -f ${DDIR}/${TARBALL}_*.tar.gz