		$(function(){
			$("#slide > input:eq(0)").click(function(){
				$("#slide > div").slideDown(200);
			});

			$("#slide > input:eq(1)").click(function(){
				$("#slide > div").slideUp(200);
			});

			$("#slide > input:eq(2)").click(function(){
				$("#slide > div").slideToggle(200);
			});			
		});
