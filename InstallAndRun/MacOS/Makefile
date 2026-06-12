################################################################################
#
#   31 May, 2026 - E M Thornber
#   Created
#
################################################################################

#APPNAME=${shell npm pkg get name | tr -d '"'}
APPNAME=MMC-SERVER
VERSION=${shell npm pkg get version | tr -d '"'}
EPM := $(shell which epm)
ODIR := InstallAndRun/MacOS
APPPKG := InstallAndRun/MacOS/MMC-PKG.epm
APPTAR := InstallAndRun/MacOS/MMC-TAR.epm
RM=/bin/rm -f
TS=`date "+%y%m%d-%H%M"`

EPMARGS := -vv --output-dir $(ODIR) appname=${APPNAME} version=${VERSION} $(APPNAME)
all: pkgs

pkgs: portable macos

macos :
	$(RM) $(ODIR)/$@-*.log
	$(EPM) --setup-image ${ODIR}/MMCicon-256.gif -a all -f $@ ${EPMARGS} $(APPPKG) 2>&1 | tee $(ODIR)/$@-$(TS).log

portable :
	$(RM) $(ODIR)/$@-*.log
	$(EPM) -a all -f $@ ${EPMARGS} $(APPTAR) 2>&1 | tee $(ODIR)/$@-$(TS).log
