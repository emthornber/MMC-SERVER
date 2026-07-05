#! /usr/bin/env bash
################################################################################
#   Script to create a tarball of the MMC-SERVER application for distribution.
#  
#   1 July 2026 - E M Thornber
#   Created
#
################################################################################

APP_NAME="MMC-SERVER"
EXCLUDE_FILE="MMC-SERVER/InstallAndRun/excluded_files.txt"
TAR=/usr/bin/tar
VERSION=`npm pkg get version | tr -d '"'`
GZIP=/usr/bin/gzip

( cd .. ; \
  ${TAR} -cvf - --exclude-vcs --exclude-from ${EXCLUDE_FILE} MMC-SERVER/* ) | \
  ${GZIP} -9 > InstallAndRun/APP_NAME}-src-${VERSION}.tar.gz