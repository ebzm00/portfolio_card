import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, GithubIcon, MailIcon, BookOpenIcon, ServerIcon } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">함규상</h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold">Spring Boot 기반 백엔드 개발자</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              2년간 ERP 솔루션 개발자로 재직하며 다양한 고객사의 요구사항을 분석하고 시스템에 구현해왔습니다.
              현재는 백엔드 개발자를 꿈꾸며, API 설계와 외부 API 연동을 한 경험을 바탕으로 사용자 중심의 백엔드 솔루션을 구축하고자 합니다.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Tech Stack Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">기술 스택</h2>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-100 text-sm px-4 py-2">
                  Java
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100 text-sm px-4 py-2">
                  Spring Boot
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 text-sm px-4 py-2">
                  PostgreSQL
                </Badge>
                <Badge variant="outline" className="bg-sky-50 text-sky-700 hover:bg-sky-100 text-sm px-4 py-2">
                  Docker
                </Badge>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 hover:bg-orange-100 text-sm px-4 py-2">
                  AWS
                </Badge>
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 text-sm px-4 py-2">
                  Kakao API
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100 text-sm px-4 py-2">
                  Tmap API
                </Badge>
                <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-100 text-sm px-4 py-2">
                  Redis
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 text-sm px-4 py-2">
                  MySQL
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">프로젝트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 운기조식 GIOSK 프로젝트 */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg">
                <div className="flex flex-col gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2 whitespace-nowrap">
                      운기조식 GIOSK – 카페 키오스크 시스템
                    </CardTitle>
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>2025.03.31 ~ 2025.04.16</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <span>팀 인원: 5명</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 flex-grow">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                      <ServerIcon className="h-4 w-4 mr-2 text-green-600" />
                      주요 구현 내용
                    </h4>
                    <ul className="space-y-1.5 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        전체 상품 조회 API 개발
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        카테고리별 상품 조회 API 개발
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        개별 상품 상세 조회 API 개발
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        AWS S3를 활용한 상품 이미지 업로드
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">사용 기술</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        Spring Boot
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        PostgreSQL
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        AWS S3
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        JPA
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-2 mt-auto">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 hover:bg-gray-50 w-full" asChild>
                      <a href="https://github.com/UGJS-GIOSK/giosk-be" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 최후의 만찬 프로젝트 */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 rounded-t-lg">
                <div className="flex flex-col gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      최후의 만찬 – 식당 웨이팅 시스템
                    </CardTitle>
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>2025.04.17 ~ 2025.05.09</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <span>팀 인원: 5명</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 flex-grow">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                      <ServerIcon className="h-4 w-4 mr-2 text-red-600" />
                      주요 구현 내용
                    </h4>
                    <ul className="space-y-1.5 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        점주가 대기열 상태를 오픈/중단/종료할 수 있는 기능 구현
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        자주 조회되는 설정 데이터를 Redis에 캐싱하여 응답 속도 개선 
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">사용 기술</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        Java
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        Spring Boot
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        Redis
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        MySQL
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        JPA
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        Docker
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-2 mt-auto">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 hover:bg-gray-50 w-full" asChild>
                      <a href="https://github.com/The-Last-Supper-Chef/The-Last-Supper" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 마키 프로젝트 */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
                <div className="flex flex-col gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      마키 – AI 데이트 코스 추천 서비스
                    </CardTitle>
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>2025.05.12 ~ 2025.06.10</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <span>팀 인원: 5명</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 flex-grow">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                      <ServerIcon className="h-4 w-4 mr-2 text-blue-600" />
                      주요 구현 내용
                    </h4>
                    <ul className="space-y-1.5 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        사용자 입력 주소를 카카오 키워드 API로 좌표 변환
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        좌표를 Tmap 경로 API에 전달하여 실시간 지하철 경로 조회
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        응답 결과에서 환승역, 소요 시간, 도착역 정보를 파싱
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        사용자에게 최적 경로를 제공하는 백엔드 API 구현
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">사용 기술</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        Spring Boot
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        PostgreSQL
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        Kakao Local API
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        Tmap Transit API
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-2 mt-auto">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 hover:bg-gray-50 w-full" asChild>
                      <a href="https://github.com/nambar-wan/marky" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">연락처</h2>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <Button variant="outline" size="lg" className="flex items-center gap-3 hover:bg-gray-50 min-w-[160px]" asChild>
                  <a href="https://github.com/ebzm00" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-3 hover:bg-blue-50 hover:text-blue-700 min-w-[160px]"
                  asChild
                >
                  <a href="mailto:hgs01041161264@gmail.com">
                    <MailIcon className="h-5 w-5" />
                    Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-3 hover:bg-green-50 hover:text-green-700 min-w-[160px]"
                >
                  <BookOpenIcon className="h-5 w-5" />
                  블로그
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-center text-gray-600">© 2025 함규상. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
