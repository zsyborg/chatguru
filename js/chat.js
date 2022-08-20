// $(document).ready(function () {
  
  ////////////////////////////////////////////////////////////////////////
  // Users Section
  ////////////////////////////////////////////////////////////////////////
CometChat = {
  CreateUser: function (uid, name, avatar, profilelink, role, metadata) {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          metadata: {'@public': metadata},
          uid: uid,
          name: name,
          avatar: avatar,
          link: profilelink,
          role: role
        })
      };
      
      fetch('https://216320c9250d4b99.api-eu.cometchat.io/v3/users', options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .catch(err => console.error(err));
    },


    DeactivateUser: function (uid) {
      const options = {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uidsToDeactivate: [uid]})
      };
      
      fetch('https://216320c9250d4b99.api-eu.cometchat.io/v3/users', options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .catch(err => console.error(err));
    },

    ReactivateUser:function (uid) {
      const options = {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uidsToActivate: [uid]})
      };
      
      fetch('https://216320c9250d4b99.api-eu.cometchat.io/v3/users', options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .catch(err => console.error(err));
    },


    // FillUsers:function (response) { 
    //   console.log(response[0]);
    //   // var name = response.data.name;
    //   $(".chat-list").html('<div class="chat-user animate fadeUp delay-5"><div class="user-section"><div class="row valign-wrapper"><div class="col s2 media-image offline pr-0"><img src="assets/images/user/5.jpg" alt="" class="circle z-depth-2 responsive-img"></div><div class="col s10"><p class="m-0 info-text grp_lastmessage">Apple pie bonbon cheesecake tiramisu</p><p class="m-0 blue-grey-text text-darken-4 font-weight-700 grp_name">'+name+'</p></div></div></div><div class="info-section"><div class="star-timing"><div class="time"><span>2 days ago</span></div></div></div></div>');
    // },


    GetAllUsers:function  (){
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          'Content-Type': 'application/json'
        }
      };

      $.ajax({
        url: 'https://216320c9250d4b99.api-eu.cometchat.io/v3/users',
        dataType: "json",
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          'Content-Type': 'application/json'
        },
        type: "GET",
        async: true,
        success: function (data) {
          var GlobalUsers = data.data;
          console.log(GlobalUsers);
          var i = 0;
          do{
            $(".chat-list").append('<div class="chat-user '+GlobalUsers[i].uid+' animate fadeUp delay-5"><div class="user-section"><div class="row valign-wrapper"><div class="col s2 media-image offline pr-0"><img src="assets/images/user/5.jpg" alt="" class="circle z-depth-2 responsive-img"></div><div class="col s10"><p class="m-0 info-text grp_lastmessage">Apple pie bonbon cheesecake tiramisu</p><p class="m-0 blue-grey-text text-darken-4 font-weight-700 grp_name">'+GlobalUsers[i].name+'</p></div></div></div><div class="info-section"><div class="star-timing"><div class="time"><span>2 days ago</span></div></div></div></div>');
            console.log(GlobalUsers[i].name);
            i++;
          } while(GlobalUsers, i < GlobalUsers.length);
          
          // forEach Loop
          // GlobalUsers.forEach(item => {
          // });

          return GlobalUsers;
        },
        error: function (xhr, exception) {
            var msg = "";
            if (xhr.status === 0) {
                msg = "Not connect.\n Verify Network." + xhr.responseText;
            } else if (xhr.status == 404) {
                msg = "Requested page not found. [404]" + xhr.responseText;
            } else if (xhr.status == 500) {
                msg = "Internal Server Error [500]." +  xhr.responseText;
            } else if (exception === "parsererror") {
                msg = "Requested JSON parse failed.";
            } else if (exception === "timeout") {
                msg = "Time out error." + xhr.responseText;
            } else if (exception === "abort") {
                msg = "Ajax request aborted.";
            } else {
                msg = "Error:" + xhr.status + " " + xhr.responseText;
            }
           
        }
    }); 
      
      // fetch('https://216320c9250d4b99.api-eu.cometchat.io/v3/users?perPage='+perpage+'&page='+page+'&withTags=false', options)
      //   .then(response => response.json())
      //   .then(response => console.log(response.data[0].name))
      //   // .then(response => FillUsers(response.data[0])
      //   .catch(err => console.error(err))}
  },
    GetAllRoles:function () {
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          'Content-Type': 'application/json'
        }
      };
      
      fetch('https://216320c9250d4b99.api-eu.cometchat.io/v3/roles', options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .catch(err => console.error(err));
    },


    GetUserByUid: function (uid) {
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          'Content-Type': 'application/json'
        }
      };
      
      fetch('https://216320c9250d4b99.api-eu.cometchat.io/v3/users/' + uid, options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .catch(err => console.error(err));
    },



    ////////////////////////////////////////////////////////////////////////
    // Groups Section
    ////////////////////////////////////////////////////////////////////////


   CreateGroup: function (metadata, tags, members, guid, name, type, icon, description, owner) {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          metadata: metadata,
          tags: tags,
          members: members,
          guid: guid,
          name: name,
          type: type,
          icon: icon,
          description: description,
          owner: owner
        })
      };
      
      fetch('https://216320c9250d4b99.api-eu.cometchat.io/v3/groups', options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .catch(err => console.error(err));
    },


    ListGroups:function (searchKey, type) {
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          'Content-Type': 'application/json'
        }
      };
      
      fetch('https://216320c9250d4b99.api-eu.cometchat.io/v3/groups?searchKey='+searchKey+'&perPage=100&type='+type, options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .catch(err => console.error(err));
    },

    AddMembersToGroup:function (admins, moderators,users,bannedusers,OnBehalfOf) {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          onBehalfOf: OnBehalfOf,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          admins: admins,
          moderators: moderators,
          participants: users,
          usersToBan: bannedusers
        })
      };
      
      fetch('https://216320c9250d4b99.api-eu.cometchat.io/v3/groups/group/members', options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .catch(err => console.error(err));
    },

    ListGroupUsers:function (group, perPage, page) {
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          'Content-Type': 'application/json'
        }
      };
      
      fetch('https://216320c9250d4b99.api-eu.cometchat.io/v3/groups/'+group+'/members?perPage='+perPage+'&page='+page, options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .catch(err => console.error(err));
    },
    

    ////////////////////////////////////////////////////////////////////////
    // Message Section
    ////////////////////////////////////////////////////////////////////////
    SendMessage:function (sender, receiver, message, receiverType, messageType) {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          apiKey: '1617ac853b58c5d16656765600dedd266e59d0ea',
          onBehalfOf: sender,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: 'message',
          type: messageType,
          data: message,
          receiver: receiver,
          receiverType: receiverType
        })
      };
      
      fetch('https://216320c9250d4b99.api-eu.cometchat.io/v3/messages', options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .catch(err => console.error(err));
    },
      
      // });
    }
