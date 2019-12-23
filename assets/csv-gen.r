# this script generates the csv files (pids.csv and rows.csv) needed by the incumbency visualization

library(data.table)
library(jsonlite)
library(readr)
library(dplyr)


filePath <- '~/github/tcpd_data/data/AE/Data/Jharkhand/derived/mastersheet.csv'

data = fread(filePath, na="")
#dt <- dt[dt$No_Mandates > 0]
data <- data[Party != 'NOTA' , c("Assembly_No", "Poll_No", "Year", "Candidate", "State_Name", "Constituency_Name", "Party", "Last_Party", "pid", "Votes", "Sex", "Position", "Contested", "No_Terms", "Turncoat", "Incumbent", "Vote_Share_Percentage", "Margin", "Margin_Percentage", "Age")]

# filter dt down to only rows whose pid is present in this assembly
for (assembly in min(data$Assembly_No):max(data$Assembly_No)) {
  print (paste('Generating data for assembly# ', assembly))
  
  dt = data[Assembly_No <= assembly] # filter out all rows after this assembly
  
  # get pids of everyone who has a line in this assembly...
  # ... but drop INDs and non-winning-parties parties unless their Position is < 3 to avoid the long tail of insignificant cands
  
  party_seat_count = dt[Assembly_No == assembly & Position == 1, .(count = .N), by='Party']
  winning_parties = party_seat_count$Party # only winning parties will have an entry in this table
  this_assembly_pids = unique(dt[Assembly_No == assembly & (Position < 3 | (Party %in% winning_parties & Party != 'IND'))]$pid)

  print (paste("winning parties = ", winning_parties))
  
  dt = dt[pid %in% this_assembly_pids]
  # only keep those rows with a pid in this assembly
  
  terms_served_by_pid = dt[Position == 1, .(Terms=length(unique(Assembly_No))), by=c('pid')]
  dt = merge (dt, terms_served_by_pid, by=c('pid'), all.x=TRUE)
  
  # fix the #mandates and contested to be whatever it is up to the current assembly
  # otherwise rows for the same pid will have different values in these columns
  dt[, No_Terms:=max(No_Terms), by=c('pid')]
  dt[, Contested:=max(Contested), by=c('pid')]
  
  terms_contested_by_pid = dt[, .(Terms_Contested=length(unique(Assembly_No))), by=c('pid')]
  dt = merge (dt, terms_contested_by_pid, by=c('pid'), all.x = TRUE)
  
  fwrite(dt, file=paste0('../jh-incumbency-',assembly,'.csv'))
}

# read the pics table from both LS and PRS and assign the link in the last row to that pid
# = fread('~/github/tcpd_data/data/AE/oct_19_working/maharashtra_candidates_pictures.csv',na="")
#source("~/github/tcpd_data/data/GE/scripts/helper.R")
#pics = normalizePartyAbb(pics,"party_list")
#pics = fread("~/github/tcpd_data/data/AE/oct_19_working/JH_AE19_working_mastersheet.csv",stringsAsFactors = F,na="") %>% subset(Party!="NOTA" & !is.na(picture_link),select=c("pid","picture_link")) %>% unique()
#names(pics)[which(names(pics)=="picture_link")]=="link"
#fwrite(pics,"../jh-pids.csv")
#curr.data = subset(data,Assembly_No ==4)

#mrg = left_join(pics,curr_data[,c("State_Name","Constituency_Name","Candidate","Party","Position","pid")],by=c("state_list"= "State_Name","constituency_list"="Constituency_Name","name_list"="Candidate","party_list"="Party"))
#dt = data.table(mrg)
#pics_affidavit   = dt[, .(link=.SD[nrow(.SD)]$picture_link_list), by=.(pid)]
#pics_ls = fread ('~/github/tcpd_data/data/GE/GE_19_working/pictures_with_pids.csv');
#pics_ls = pics_ls[, .(link=.SD[nrow(.SD)]$link), by=.(pid)]

#pics_prs = fread ('~/github/tcpd_data/data/GE/GE_19_working/pictures_with_pids_prs.csv');
#pics_prs = pics_prs[, .(link=.SD[nrow(.SD)]$link), by=.(pid)]

# pics_merged = merge(pics_prs, pics_ls, by=c('pid'), all.x=TRUE, all.y=TRUE)
# 
# # the link is preferably PRS (link.x), but if its NA, use the LS link
# pics_merged$link = '' 
# for (i in 1:nrow(pics_merged)) {
#   if (is.na(pics_merged[i]$link.x)) {
#     pics_merged[i]$link = pics_merged[i]$link.y;
#   } else {
#     pics_merged[i]$link = pics_merged[i]$link.x;
#   }
# }

#fwrite(pics_affidavit, file='../mh-pids.csv')

