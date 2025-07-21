$(document).ready(function(){
    $("#b2bForm").submit(function(e){
        e.preventDefault();

        const formData = new FormData(this);

        $.ajax({
            url: "/api/b2b-inquiry",
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function(response){
                alert("문의가 정상적으로 접수되었습니다.");
                $("#b2bForm")[0].reset();
                $("#file-list").html("<li class='empty-msg'>선택된 파일 없음</li>");
            },
            error: function(err){
                alert("오류가 발생했습니다. 관리자에게 문의해주세요.");
            }
        });
    });
});
